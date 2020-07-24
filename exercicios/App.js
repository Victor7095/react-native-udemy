import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ContadorV2 from "./src/components/contador/ContadorV2";
import UsuarioLogado from "./src/components/UsuarioLogado";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UsuarioLogado
        usuario={{ nome: "Yan", email: "victoryan345@gmail.com" }}
      />
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
