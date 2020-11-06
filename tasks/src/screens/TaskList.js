import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

import moment from "moment";
import "moment/locale/pt-br";

import uuid from "uuid";
import todayImage from "../../assets/images/today.jpg";

import Task from "../components/Task";
import commonStyles from "../commonStyles";
import AddTask from "./AddTask";

export default class TaskList extends Component {
  state = {
    showDoneTasks: true,
    showAddTaskModal: false,
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

  addTask = (newTask) => {
    if (!newTask.desc || !newTask.desc.trim()) {
      Alert.alert("Dados inválidos", "Descrição não informada!");
      return;
    }
    const tasks = [...this.state.tasks];
    tasks.push({
      id: uuid(),
      description: newTask.desc,
      estimatedAt: newTask.date,
      doneAt: null,
    });
    this.setState({ tasks, showAddTaskModal: false }, this.filterTasks);
  };

  deleteTask = (taskId) => {
    const tasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks }, this.filterTasks);
  };

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTaskModal}
          onCancel={() => this.setState({ showAddTaskModal: false })}
          onSave={this.addTask}
        />
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
              <Task {...task} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />
            )}
          ></FlatList>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() => this.setState({ showAddTaskModal: true })}
        >
          <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
        </TouchableOpacity>
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
  addButton: {
    position: "absolute",
    right: 25,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: commonStyles.colors.today,
    alignItems: "center",
    justifyContent: "center",
  },
});
