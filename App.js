import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/LoginScreen";
// import { createStackNavigator } from "react-navigation-stack";
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ title: "Let's Sign Up" }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Let's Register" }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>

      {/* <Text>Openr up App.js to start working on your app!</Text> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
