import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MineField from "./src/components/MineField";
import params from "./src/params";
import { createMinedBoard } from "./src/functions";

export default function App() {
  const minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return Math.ceil(rows * columns * params.difficultyLevel);
  };

  const createState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return createMinedBoard(rows, columns, minesAmount());
  };

  const [board, setBoard] = useState(createState());

  return (
    <View style={styles.container}>
      <MineField board={board}></MineField>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
