import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default (props) => {
  return (
    <Tabs.Navigator
      initialRouteName="ScreenB"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "ScreenA":
              iconName = focused
                ? "ios-notifications"
                : "ios-notifications-outline";
              break;
            case "ScreenB":
              iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
              break;
            case "ScreenC":
              iconName = focused ? "ios-cloud" : "ios-cloud-outline";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        showLabel: false,
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
