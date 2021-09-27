import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ConvertScreen from "./src/screens/ConvertScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import SendScreen from "./src/screens/SendScreen";
import RechargeScreen from "./src/screens/RechargeScreen";
import BankScreen from "./src/screens/BankScreen";
import WalletScreen from "./src/screens/WalletScreen";
import ApiProvider from "./src/context/Api/ApiProvider";
import RegisterAccountScreen from "./src/screens/RegisterAccountScreen";
import TransactionScreen from "./src/screens/TransactionScreen";
import SendReportScreen from "./src/screens/SendReportScreen";
import ReceivedReportScreen from "./src/screens/ReceivedReportScreen";
import RechargeReportScreen from "./src/screens/RechargeReportScreen";
import DepositReportScreen from "./src/screens/DepositReportScreen";
import AllTransactionsScreen from "./src/screens/AllTransactionsScreen";
import SplashScreen from "./src/screens/SplashScreen";
import { TouchableOpacity } from "react-native";
import SideMenuScreen from "./src/screens/SideMenuScreen/SideMenuScreen";

const Stack = createStackNavigator();
const MainNavigator = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const DashboardStackHome = ({ navigation }) => {
  return (
    <MainNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "yellow",
        },
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="ios-menu"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          );
        },
      })}
    >
      <MainNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "Dashboard" }}
      />
    </MainNavigator.Navigator>
  );
};
const MainStack = () => {
  return (
    <MainDrawer.Navigator drawerContent={(props) => <SideMenuScreen {...props} />} >
      <MainDrawer.Screen name="Dashboard" component={DashboardStackHome} />
    </MainDrawer.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <ApiProvider>
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="DashboardScreen" component={DashboardStackHome} />
        </Stack.Navigator>
      </ApiProvider>
    </NavigationContainer>
  );
}
