import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function Flexbox(props) {
  return (
    <View style={styles.container}>
      <Quadrado />
      <Quadrado color="#eeff00" />
      <Quadrado color="#ccdd00" />
      <Quadrado color="#ff0000" />
      <Quadrado color="#0000ff" />
      <Quadrado color="#00ff00" />
      <Quadrado color="#00ccdd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "stretch",
    backgroundColor: "#999999",
    justifyContent: "space-between",
    padding: 20
  },
});
