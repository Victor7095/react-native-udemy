import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import ContadorDisplay from "./ContadorDisplay";
import Botoes from "./Botoes";

export default function ContadorV2(props) {
  const [num, setNum] = useState(0);

  const inc = () => setNum((num) => ++num);
  const dec = () => setNum((num) => --num);

  return (
    <>
      <Text style={styles.title}>Contador</Text>
      <ContadorDisplay num={num} />
      <Botoes inc={inc} dec={dec} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginBottom: 20
  }
})