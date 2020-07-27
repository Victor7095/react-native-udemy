import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function DigiteSeuNome(props) {
  const [nome, setNome] = useState("asasasas");
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      ></TextInput>
      <Text></Text>
    </View>
  );
}
