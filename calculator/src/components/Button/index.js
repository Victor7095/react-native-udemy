import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({big, color, onPressed, selected, children}) => {
  const buttonStyle = [styles.Button];
  const buttonTextStyle = [styles.ButtonText];
  big && buttonStyle.push(styles.ButtonBig)
  color == "lightGray" && buttonStyle.push(styles.ButtonLightGray) 
  color == "orange" && buttonStyle.push(styles.ButtonOrange) 
  selected && buttonStyle.push(styles.ButtonSelected) && buttonTextStyle.push(styles.ButtonSelectedText)
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressed}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
