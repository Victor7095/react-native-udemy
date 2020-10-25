import React from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>
        Tamanho da grade: {params.getRowsAmount()}*{params.getColumnsAmount()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
  }
});
