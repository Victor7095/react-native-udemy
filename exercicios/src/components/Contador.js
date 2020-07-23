import React, { useState } from "react";
import { Text, Button } from "react-native";

export default function Contador(props) {
  const [numero, setNumero] = useState(5);
  const inc = () => {
    setNumero((num) => ++num);
  };
  const dec = () => {
    setNumero((num) => --num);
  };
  return (
    <>
      <Text>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
}
