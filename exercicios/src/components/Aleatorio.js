import React from "react";
import { Text } from "react-native";

export default function Aleatorio({ max, min }) {
  return <Text>{Math.floor(Math.random() * (max - min + 1) + min)}</Text>;
}
