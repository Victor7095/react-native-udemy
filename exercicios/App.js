import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ListaProdutos from "./src/components/produtos/ListaProdutosV2";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
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
