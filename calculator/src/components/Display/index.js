import React from "react";
import { View, Text } from "react-native";
import RetroBorders from "../UI/RetroBorders";
import RetroText from "../UI/RetroText";
import styles from "./styles";

const Display = (props) => {
  return (
    <View style={styles.Display}>
      <RetroBorders/>
      <RetroText style={styles.DisplayValue} numberOfLines={1}>
        {props.value}
      </RetroText>
    </View>
  );
};

export default Display;
