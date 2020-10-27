import React from "react";
import { Button, View } from "react-native";

export default (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {props.previous && (
          <Button
            title="Back"
            onPress={() => {
              props.navigation.goBack();
            }}
          ></Button>
        )}
        {props.next && (
          <Button
            title="Next"
            onPress={() => {
              props.navigation.push(props.next);
            }}
          ></Button>
        )}
      </View>
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};
