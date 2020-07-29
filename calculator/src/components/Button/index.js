import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

const Button = ({big, color, onPressed, children}) => {
  const buttonStyle = [styles.Button];
  big && buttonStyle.push(styles.ButtonBig)
  color == "lightGray" && buttonStyle.push(styles.ButtonLightGray) 
  color == "orange" && buttonStyle.push(styles.ButtonOrange) 
  return (
    <TouchableHighlight style={buttonStyle} onPress={onPressed}>
      <Text style={styles.ButtonText}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
