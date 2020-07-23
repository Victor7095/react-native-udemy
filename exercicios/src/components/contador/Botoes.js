import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Botoes({ inc, dec }) {
  return (
    <View style={styles.Botoes}>
      <Button title="-" onPress={dec} />
      <Button title="+" onPress={inc} />
    </View>
  );
}

const styles = StyleSheet.create({
  Botoes: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  Botao: {
    backgroundColor: "#00ff00"
  }
})