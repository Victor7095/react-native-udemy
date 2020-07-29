import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Numero(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>{props.numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#ff8800",
    justifyContent: "center",
    alignItems: "center",
  },
  textWhite: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700"
  },
});
