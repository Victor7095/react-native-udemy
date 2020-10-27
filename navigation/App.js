import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";

export default (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="dark" />
      <Routes/>
    </SafeAreaView>
  );
};