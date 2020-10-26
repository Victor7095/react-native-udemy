import React from "react";
import { View } from "react-native";
import styles from "./styles";

const RetroBorders = (props) => {
  return (
    <>
      <View
        style={[styles.LineVertical, { top: -styles.LineVertical.height }]}
      />
      <View
        style={[styles.LineVertical, { bottom: -styles.LineVertical.height }]}
      />
      <View
        style={[styles.LineHorizontal, { left: -styles.LineHorizontal.width }]}
      />
      <View
        style={[styles.LineHorizontal, { right: -styles.LineHorizontal.width }]}
      />
      {props.children}
    </>
  );
};

export default RetroBorders;
