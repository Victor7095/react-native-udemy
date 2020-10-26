import React from "react";
import { TouchableOpacity } from "react-native";
import RetroBorders from "../UI/RetroBorders";
import RetroText from "../UI/RetroText";
import styles from "./styles";

const Button = ({ big, color, onPressed, selected, children }) => {
  const buttonStyle = [styles.Button];
  const buttonTextStyle = [styles.ButtonText];
  big && buttonStyle.push(styles.ButtonBig);
  color == "lightGray" && buttonStyle.push(styles.ButtonLightGray);
  color == "orange" && buttonStyle.push(styles.ButtonOrange);
  color == "lightRed" && buttonStyle.push(styles.ButtonLightRed);
  selected &&
    buttonStyle.push(styles.ButtonSelected) &&
    buttonTextStyle.push(styles.ButtonSelectedText);
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressed}>
      <RetroBorders />
      <RetroText style={buttonTextStyle}>{children}</RetroText>
    </TouchableOpacity>
  );
};

export default Button;
