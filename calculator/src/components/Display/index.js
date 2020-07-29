import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Display = (props) => {
  return (
    <View style={styles.Display}>
      <Text style={styles.DisplayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};

export default Display;
