import React from "react";
import { View, StyleSheet } from "react-native";
import Field from "./Field";

export default ({ board, onOpenField }) => {
  const rows = board.map((row, rowIndex) => {
    const fields = row.map((field, columnIndex) => {
      return (
        <Field
          key={columnIndex}
          {...field}
          onOpen={() => onOpenField(rowIndex, columnIndex)}
        />
      );
    });
    return (
      <View key={rowIndex} style={styles.fieldRow}>
        {fields}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
  },
  fieldRow: { flexDirection: "row", justifyContent: "center" },
});
