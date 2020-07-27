import React from "react";
import { View } from "react-native";

export default function (props) {
  return <View style={{
    height: 50,
    width: 50,
    backgroundColor: props.color || "#000000",
    borderWidth: 2,
    borderColor: "#000000",
    alignSelf: "center"
  }}></View>;
}