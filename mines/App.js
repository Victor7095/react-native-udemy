import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import MineField from "./src/components/MineField";
import params from "./src/params";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExploded,
  wonGame,
  showMines,
  invertFlag
} from "./src/functions";

export default function App() {
  const minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return Math.ceil(rows * columns * params.difficultyLevel);
  };

  const createBoardState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return createMinedBoard(rows, columns, minesAmount());
  };

  const [board, setBoard] = useState(createBoardState());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const onOpenField = (row, column) => {
    const boardCopy = cloneBoard(board);
    openField(boardCopy, row, column);
    const lost = hasExploded(boardCopy);
    const won = wonGame(boardCopy);
    if (lost) {
      showMines(boardCopy);
      Alert.alert("Você perdeu!", "Você se sairá melhor na próxima vez");
    }
    if (won) {
      Alert.alert("Parebéns!", "Você venceu o jogo !!!");
    }
    setBoard(boardCopy);
    setLost(lost);
    setWon(won);
  };

  const onSelectField = (row, column) => {
    const boardCopy = cloneBoard(board);
    invertFlag(boardCopy, row, column);
    const won = wonGame(boardCopy);
    if (won) {
      Alert.alert("Parebéns!", "Você venceu o jogo !!!");
    }
    setBoard(boardCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MineField board={board} onOpenField={onOpenField} onSelectField={onSelectField}></MineField>
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
