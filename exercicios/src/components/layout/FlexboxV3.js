import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function Flexbox(props) {
  return (
    <View style={styles.container}>
      <Quadrado color="#eeff00" lado={20} />
      <Quadrado color="#ff0000" lado={30} />
      <Quadrado color="#0000ff" lado={40} />
      <Quadrado color="#00ff00" lado={50} />
      <Quadrado color="#00ccdd" lado={60} />
      <Quadrado color="#00ccdd" lado={70} />
      <Quadrado color="#00ccdd" lado={80} />
      <Quadrado color="#00ccdd" lado={90} />
      <Quadrado color="#00ccdd" lado={80} />
      <Quadrado color="#00ccdd" lado={70} />
      <Quadrado color="#00ccdd" lado={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
    height: 350,
    width: "100%",
    backgroundColor: "#999999",
    padding: 20
  },
});
