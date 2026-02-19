import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RosterScreen from "../screens/RosterScreen";
import AddPlayerScreen from "../screens/AddPlayerScreen";

export type RootStackParamList = {
  Roster: undefined;
  AddPlayer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Roster"
          component={RosterScreen}
          options={{ title: "Team Roster" }}
        />
        <Stack.Screen
          name="AddPlayer"
          component={AddPlayerScreen}
          options={{ title: "Add Player" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
