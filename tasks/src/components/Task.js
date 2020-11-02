import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      <View>
        <Text style={[styles.description, doneOrNotStyle]}>
          {props.description}
        </Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
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
});
