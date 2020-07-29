import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Mega from "./src/components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdeNumeros={11}/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
});
