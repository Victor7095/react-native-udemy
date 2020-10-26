import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const RetroText = (props) => {
  let [fontsLoaded] = useFonts({
    rainyhearts: require("../../../../assets/fonts/rainyhearts/rainyhearts.ttf"),
  });
  if (!fontsLoaded) {
    return <Text {...props}>{props.children}</Text>;
  } else {
    let textStyle = [{ fontFamily: "rainyhearts" }];
    if (Array.isArray(props.style)) textStyle = textStyle.concat(props.style);
    else textStyle.push(props.style);
    return (
      <Text {...props} style={textStyle}>
        {props.children}
      </Text>
    );
  }
};

export default RetroText;
