import React from "react";
import { Text } from "react-native";
import If from "./If";

export default function UsuarioLogado({ usuario = {} }) {
  return (
    <>
      <If teste>
        <Text>Usuário Logado:</Text>
        <Text>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
}
