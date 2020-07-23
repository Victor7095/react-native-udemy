import React from "react";
import { View, Button } from "react-native";

export default function Filho({ min, max, funcao }) {
  function gerarNumero() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <View>
      <Button title="Executar" onPress={() => funcao(gerarNumero())} />
    </View>
  );
}
