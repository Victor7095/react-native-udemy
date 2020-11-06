import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "@expo/vector-icons/FontAwesome5";
import moment from "moment";
import "moment/locale/pt-br";

import commonStyles from "../commonStyles";

export default (props) => {
  const doneOrNotStyle = props.doneAt
    ? { textDecorationLine: "line-through" }
    : {};
  const date = props.doneAt || props.estimatedAt;
  const formattedDate = moment(date, "pt-br").format("ddd, D [de] MMMM");

  const getLeftContent = () => {
    return (
      <View style={styles.left}>
        <Icon name="trash" size={20} color="#FFF" style={styles.excludeIcon} />
        <Text style={styles.excludeText}>Excluir</Text>
      </View>
    );
  };

  const getRightContent = () => {
    return (
      <TouchableOpacity
        style={styles.right}
        onPress={() => props.onDelete(props.id)}
      >
        <Icon name="trash" size={30} color="#FFF" />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderLeftActions={getLeftContent}
      renderRightActions={getRightContent}
      onSwipeableLeftOpen={() => props.onDelete(props.id)}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
          <View style={styles.checkContainer}>
            {getCheckView(props.doneAt)}
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.description, doneOrNotStyle]}>
            {props.description}
          </Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const getCheckView = (doneAt) => {
  if (doneAt) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={16} color="#FFF" />
      </View>
    );
  }
  return <View style={styles.pending}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#AAA",
    backgroundColor: "#FFF",
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  done: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#4D7031",
    alignItems: "center",
    justifyContent: "center",
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: "#555",
  },
  description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 18,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  left: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  excludeText: {
    fontFamily: commonStyles.fontFamily,
    color: "#FFF",
    fontSize: 20,
    margin: 10,
  },
  excludeIcon: {
    marginLeft: 10,
  },
  right: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
});
