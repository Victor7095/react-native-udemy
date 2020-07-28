import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros + "",
    numeros: [],
  };

  gerarNumeros = () => {
    const numeros = [];
    while (numeros.length < this.state.qtdeNumeros) {
      const novoNumero = Math.floor(Math.random() * 100);
      !numeros.includes(novoNumero) && numeros.push(novoNumero);
    }
    this.setState({ numeros: numeros.sort((a, b) => a - b ) });
  };

  render() {
    return (
      <>
        <Text>Gerador de Mega Sena {this.state.qtdeNumeros}</Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1 }}
          value={this.state.qtdeNumeros}
          onChangeText={(qtde) => this.setState({ qtdeNumeros: qtde })}
        />
        <Button onPress={this.gerarNumeros} title="Click"></Button>
        {this.state.numeros.map((num, i) => (
          <Text key={i}>{num}</Text>
        ))}
      </>
    );
  }
}
