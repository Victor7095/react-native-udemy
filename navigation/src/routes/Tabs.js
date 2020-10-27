import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Tabs = createBottomTabNavigator();

export default (props) => {
  return (
    <Tabs.Navigator
      initialRouteName="ScreenB"
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle: { fontSize: 30 },
      }}
    >
      <Tabs.Screen
        name="ScreenA"
        component={ScreenA}
        options={{ title: "Home" }}
      />
      <Tabs.Screen name="ScreenB" component={ScreenB} />
      <Tabs.Screen name="ScreenC" component={ScreenC} />
    </Tabs.Navigator>
  );
};
