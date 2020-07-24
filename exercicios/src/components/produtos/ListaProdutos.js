import React from "react";
import { Text } from "react-native";

import produtos from "./produtos";

export default function Produtos(props) {
  return (
    <>
      <Text>Lista de Produtos</Text>
      {produtos.map((produto) => (
        <Text key={produto.id}>{produto.nome} - {produto.preco}</Text>
      ))}
    </>
  );
}
