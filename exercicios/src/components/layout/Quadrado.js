import React from "react";
import { View } from "react-native";

export default function (props) {
  const lado = props.lado || 50;
  return <View style={{
    height: lado,
    width: lado,
    backgroundColor: props.color || "#000000",
    borderWidth: 2,
    borderColor: "#000000"
  }}></View>;
}