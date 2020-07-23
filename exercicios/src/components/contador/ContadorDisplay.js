import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContadorDisplay({ num }) {
  return (
    <View>
      <Text style={styles.num}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  num: {
    fontSize: 30
  }
})