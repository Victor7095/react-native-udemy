import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import todayImage from "../../assets/images/today.jpg";
import moment from "moment";
import "moment/locale/pt-br";
import uuid from "uuid";

import commonStyles from "../commonStyles";
import Task from "../components/Task";

export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        description: "Task #1",
        estimatedAt: new Date(),
        doneAt: new Date(),
      },
      { id: uuid(), description: "Task #2", estimatedAt: new Date() },
    ],
  };

  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({ tasks });
  };

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
          <FlatList
            data={this.state.tasks}
            keyExtractor={(task) => `${task.id}`}
            renderItem={({ item: task }) => (
              <Task {...task} toggleTask={this.toggleTask} />
            )}
          ></FlatList>
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
