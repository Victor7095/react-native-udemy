import React from "react";
import { Text } from "react-native";

export default function Comp() {
  return <Text>Componente #Oficial</Text>;
}

function Comp1() {
  return <Text>Componente #1</Text>;
}

function Comp2() {
  return <Text>Componente #2</Text>;
}

export { Comp1, Comp2 }