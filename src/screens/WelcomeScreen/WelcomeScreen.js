import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image
          source={{
            uri:
              "https://media3.picsearch.com/is?nRcRGte6978Y73p3-K2xUOd8LkvbBK4zmDCPLTgWRR8&height=256",
          }}
          style={styles.image} 
        />
        <Text style={styles.text}>{"\n"}Welcome to Quick Money Transfer</Text>
        <Text style={styles.textWelcome}>{"\n"}A mobile  application that unifies EAC to send or receive money.</Text>
      </View>
      <View style={styles.body}>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
          <Text style={styles.textIcons}> 100% secure</Text>
            </Ionicons>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
        <Text style={styles.textIcons}> Cost saving</Text>
        </Ionicons>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
        <Text style={styles.textIcons}> Excellent services</Text>
        </Ionicons>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
        <Text style={styles.textIcons}> Send money easily</Text>
        </Ionicons>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
        <Text style={styles.textIcons}> Receive money easily</Text>
        </Ionicons>
        <Ionicons name='ios-checkmark-circle' style={styles.icons}>
        <Text style={styles.textIcons}> Faster Checkout experience</Text>
        </Ionicons>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() =>
            navigation.dispatch(StackActions.replace("LoginScreen"))
          }
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            navigation.dispatch(StackActions.replace("RegisterScreen"))
          }
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonStyle: {
    padding: 12,
    backgroundColor: '#FF9B00',
    borderRadius: 30,
    width: 120,
    height: 38,
    marginLeft: 12
  },
  buttonStyle1: {
    padding: 12,
    backgroundColor: '#668CFF',
    borderRadius: 30,
    width: 120,
    height: 38
  },
  buttonText: {
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:  30,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold"
 },
  header: {
    alignItems: "stretch",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "white",
    top: 20
  },
  body: {
    flex: 1,
    top: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 40
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 100,
  },
  icons: {
    color:'orange',
    fontSize: 30
  },
  textIcons:{
    color: "black",
    fontSize: 18
  },
  textWelcome: {
    fontSize: 12,
  }
});
