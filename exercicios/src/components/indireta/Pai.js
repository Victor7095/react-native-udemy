import React, { useState } from "react";
import { Text } from "react-native";
import Filho from "./Filho";

export default function Pai(props) {
  const [num, setNum] = useState(0);

  const exibirValor = (numero) => {
    setNum(numero);
  };

  return (
    <>
      <Text>{num}</Text>
      <Filho min={10} max={200} funcao={exibirValor} />
    </>
  );
}
