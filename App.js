import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import  RegisterScreen  from "./src/screens/RegisterScreen";
import ConvertScreen from "./src/screens/ConvertScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        {/* <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name = 'RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name = 'ConvertScreen' component={ConvertScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
