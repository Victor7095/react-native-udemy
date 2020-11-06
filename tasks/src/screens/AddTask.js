import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Platform,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";
import "moment/locale/pt-br";

import commonStyles from "../commonStyles";

const initialState = {
  desc: "",
  date: new Date(),
  showDatePicker: false,
};

export default class AddTask extends Component {
  state = { ...initialState };

  getDatePicker = () => {
    let datepicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date) => this.setState({ date, showDatePicker: false })}
        mode="date"
      />
    );
    if (Platform.OS === "android") {
      const dateString = moment(this.state.date).format("ddd, D [de] MMMM");
      datepicker = (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ showDatePicker: true })}
          >
            <Text style={styles.date}>{dateString}</Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datepicker}
        </View>
      );
    }
    return datepicker;
  };

  save = () => {
    const newTask = {
      desc: this.state.desc,
      date: this.state.date,
    };
    if (this.props.onSave) this.props.onSave(newTask);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <Modal
        transparent
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}>
            <View style={styles.container}>
              <Text style={styles.header}>Nova Tarefa</Text>
              <TextInput
                style={styles.input}
                placeholder="Informe a descrição..."
                value={this.state.desc}
                onChangeText={(desc) => this.setState({ desc })}
              />
              {this.getDatePicker()}
              <View style={styles.buttons}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <Text style={styles.button}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.save}>
                  <Text style={styles.button}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.7)",
    justifyContent: "center",
  },
  container: {
    margin: 10,
    backgroundColor: "#FFF",
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: "center",
    padding: 15,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 6,
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 15,
  },
});
