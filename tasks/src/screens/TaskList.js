import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import todayImage from "../../assets/images/today.jpg";
import moment from "moment";
import "moment/locale/pt-br";

import commonStyles from "../commonStyles";

export default class TaskList extends Component {
  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Text>Task #1</Text>
          <Text>Task #2</Text>
          <Text>Task #3</Text>
          <Text>Task #4</Text>
          <Text>Task #5</Text>
          <Text>Task #6</Text>
          <Text>Task #7</Text>
          <Text>Task #8</Text>
          <Text>Task #9</Text>
          <Text>Task #10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 3 },
  taskList: { flex: 7 },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
});
