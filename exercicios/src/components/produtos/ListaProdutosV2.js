import React from "react";
import { Text, FlatList } from "react-native";

import produtos from "./produtos";

export default function Produtos(props) {
  return (
    <>
      <Text>Lista de Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item: produto }) => (
          <Text key={produto.id}>
            {produto.nome} - {produto.preco}
          </Text>
        )}
      ></FlatList>
    </>
  );
}
