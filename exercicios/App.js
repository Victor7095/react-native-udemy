import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Mega from "./src/components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdeNumeros={7}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeddee",
    justifyContent: "center",
    alignItems: "center",
  },
});
