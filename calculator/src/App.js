import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button onPressed={() => {}}>AC</Button>
        <Button onPressed={() => {}}>+/-</Button>
        <Button onPressed={() => {}}>%</Button>
        <Button onPressed={() => {}}>/</Button>
        <Button onPressed={() => {}}>7</Button>
        <Button onPressed={() => {}}>8</Button>
        <Button onPressed={() => {}}>9</Button>
        <Button onPressed={() => {}}>X</Button>
        <Button onPressed={() => {}}>4</Button>
        <Button onPressed={() => {}}>5</Button>
        <Button onPressed={() => {}}>6</Button>
        <Button onPressed={() => {}}>-</Button>
        <Button onPressed={() => {}}>1</Button>
        <Button onPressed={() => {}}>2</Button>
        <Button onPressed={() => {}}>3</Button>
        <Button onPressed={() => {}}>+</Button>
        <Button onPressed={() => {}}>0</Button>
        <Button onPressed={() => {}}>,</Button>
        <Button onPressed={() => {}}>=</Button>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "flex-end"
  }
});
