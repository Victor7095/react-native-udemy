import React from "react";
import { View, StyleSheet } from "react-native";

export default function Flexbox(props) {
  return (
    <View style={styles.container}>
      <View style={styles.V0}></View>
      <View style={styles.V1}></View>
      <View style={styles.V2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    backgroundColor: "#999999",
    padding: 20,
  },
  V0: {
    backgroundColor: "#33ffdd",
    height: 0,
  },
  V1: {
    backgroundColor: "#aaee00",
    flexGrow: 1,
  },
  V2: {
    backgroundColor: "#00eeaa",
    flexGrow: 1,
  },
});
