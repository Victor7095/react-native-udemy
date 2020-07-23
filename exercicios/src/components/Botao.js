import React from "react";
import { Button } from "react-native";

export default function Botao() {
  return <Button title="Executar" onPress={() => console.warn("Executando")}></Button>;
}
