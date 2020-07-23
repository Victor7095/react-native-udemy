import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Contador from "./src/components/Contador";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Contador />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeee",
    alignItems: "center",
    justifyContent: "center",
  },
});
