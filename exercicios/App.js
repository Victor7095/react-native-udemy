import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Flexbox from "./src/components/layout/FlexboxV1";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Flexbox />
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
