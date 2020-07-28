import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Mega extends Component {
  render() {
    return <Text>Gerador de Mega Sena {this.props.qtdeNumeros}</Text>
  }
}