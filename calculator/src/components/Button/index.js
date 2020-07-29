import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

const Button = (props) => {
  return (
    <TouchableHighlight style={styles.Button} onPress={props.onPressed}>
      <Text style={styles.ButtonText}>{props.children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
