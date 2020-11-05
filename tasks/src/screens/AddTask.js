import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

import moment from "moment";
import "moment/locale/pt-br";

import uuid from "uuid";

import commonStyles from "../commonStyles";

const initialState = {
  desc: "",
};

export default class AddTask extends Component {
  state = { ...initialState };

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
              <View style={styles.buttons}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <Text style={styles.button}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
});
