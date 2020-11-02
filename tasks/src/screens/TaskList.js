import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

import moment from "moment";
import "moment/locale/pt-br";

import uuid from "uuid";
import todayImage from "../../assets/images/today.jpg";

import Task from "../components/Task";
import commonStyles from "../commonStyles";

export default class TaskList extends Component {
  state = {
    showDoneTasks: true,
    visibleTasks: [],
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

  componentDidMount = () => {
    this.filterTasks();
  };

  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({ tasks }, this.filterTasks);
  };

  toggleFilter = () => {
    this.setState(
      { showDoneTasks: !this.state.showDoneTasks },
      this.filterTasks
    );
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task) => task.doneAt == null;
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({ visibleTasks });
  };

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? "eye" : "eye-slash"}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
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
  iconBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 60 : 20,
  },
});
