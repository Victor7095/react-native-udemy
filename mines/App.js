import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import LevelSelection from "./src/screens/LevelSelection";
import MineField from "./src/components/MineField";
import params from "./src/params";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExploded,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from "./src/functions";

export default function App() {
  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  useEffect(() => {
    createBoardState();
  }, []);

  const minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();

    return Math.ceil(rows * columns * params.difficultyLevel);
  };

  const createBoardState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnsAmount();
    console.log(rows);
    setBoard(createMinedBoard(rows, columns, minesAmount()));
    setWon(false);
    setLost(false);
  };

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

  onLevelSelected = (level) => {
    params.difficultyLevel = level;
    setShowLevelSelection(false);
    createBoardState();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={() => createBoardState()}
        onFlagPress={() => setShowLevelSelection(true)}
      />
      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#EEE",
  },
  board: {
    alignItems: "center",
  },
});
