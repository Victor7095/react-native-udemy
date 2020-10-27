import React from "react";
import { Button, View } from "react-native";
import CentralText from "../components/CentralText";

export default (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Button
          title="Open"
          onPress={() => {
            props.navigation.openDrawer();
            setTimeout(() => props.navigation.closeDrawer(), 5000);
          }}
        ></Button>
      </View>
      <View style={{ flex: 1 }}>
        <CentralText backgroundColor="#FFCC00" textColor="#AA00BB">
          Screen D
        </CentralText>
      </View>
    </View>
  );
};
