import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import Numero from "./Numero";

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
    this.setState({ numeros: numeros.sort((a, b) => a - b) });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Mega Sena</Text>
        <Text style={[styles.textWhite, { marginBottom: 10 }]}>
          Quantidade de números:{" "}
        </Text>
        <TextInput
          placeholderTextColor="#888888"
          color="#ffffff"
          keyboardType="numeric"
          style={styles.input}
          value={this.state.qtdeNumeros}
          onChangeText={(qtde) => this.setState({ qtdeNumeros: qtde })}
        />
        <TouchableOpacity style={styles.button} onPress={this.gerarNumeros}>
          <Text style={styles.buttonText}>Gerar Números</Text>
        </TouchableOpacity>
        <View style={styles.Numeros}>
          {this.state.numeros.map((num, i) => (
            <Numero key={i} numero={num}></Numero>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "#555555",
    padding: 5,
    borderRadius: 3,
    fontSize: 17,
    alignSelf: "stretch",
    marginBottom: 40,
  },
  button: {
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#88c000",
  },
  buttonText: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "500",
  },
  textWhite: {
    color: "#ffffff",
  },
  Numeros: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
