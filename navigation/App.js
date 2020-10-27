import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";

export default (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="dark" />
      <ScreenA/>
      <ScreenB/>
      <ScreenC/>
    </SafeAreaView>
  );
};