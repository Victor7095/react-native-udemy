import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import NavigateStack from "../components/NavigateStack";

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator initialRouteName="ScreenA">
      <Stack.Screen name="ScreenA" options={{ title: "Home" }}>
        {(props) => (
          <NavigateStack {...props} next="ScreenB">
            <ScreenA />
          </NavigateStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenB">
        {(props) => (
          <NavigateStack {...props} next="ScreenC" previous>
            <ScreenB />
          </NavigateStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenC">
        {(props) => (
          <NavigateStack {...props} next="ScreenC" previous>
            <ScreenC {...props}/>
          </NavigateStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
