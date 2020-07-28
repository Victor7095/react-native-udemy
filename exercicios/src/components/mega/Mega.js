import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros + "",
  };

  render() {
    return (
      <>
        <Text>Gerador de Mega Sena {this.state.qtdeNumeros}</Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1 }}
          value={this.state.qtdeNumeros}
          onChangeText={qtde => this.setState({qtdeNumeros: qtde})}
        />
      </>
    );
  }
}
