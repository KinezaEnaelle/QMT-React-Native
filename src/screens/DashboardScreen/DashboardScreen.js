import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://media3.picsearch.com/is?nRcRGte6978Y73p3-K2xUOd8LkvbBK4zmDCPLTgWRR8&height=256",
          }}
        />
        <View style={styles.textHeader}>
          <Text>MUKUNDE DIDINE</Text>
          <Text style={styles.country}>Rwanda</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Animatable.View
          style={styles.content1}
          animation="bounceInUp"
          duration={1500}
        >
          <View style={styles.topBox}>
            <Text style={styles.topText}>Balance</Text>
            <Text style={styles.money}> Rwf 28900.00</Text>
          </View>
        </Animatable.View>
        <View style={styles.content2}>
          <Animatable.View
            style={styles.content3}
            animation="bounceInLeft"
            duration={1500}
          >
            <TouchableOpacity
              style={styles.box1}
              onPress={() =>
                navigation.dispatch(StackActions.replace("RechargeScreen"))
              }
            >
              <Text style={styles.boxLine1}></Text>
              <Text style={styles.boxText}>{"\n"}Recharge</Text>
              <Ionicons name="cash" style={styles.boxText4}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box2}
              onPress={() =>
                navigation.dispatch(StackActions.replace("RechargeScreen"))
              }
            >
              <Text style={styles.boxLine2}></Text>
              <Text style={styles.boxText}>{"\n"}Currency Exchange</Text>
              <Ionicons name="logo-bitcoin" style={styles.boxText3}></Ionicons>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View
            style={styles.content4}
            animation="bounceInRight"
            duration={1500}
          >
            <TouchableOpacity
              style={styles.box3}
              onPress={() =>
                navigation.dispatch(StackActions.replace("ConvertScreen"))
              }
            >
              <Text style={styles.boxLine3}></Text>
              <Text style={styles.boxText}>{"\n"}Transactions</Text>
              <Ionicons
                name="list-circle-sharp"
                style={styles.boxText2}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box4}
              onPress={() => navigation.dispatch(StackActions.replace("SendScreen"))}
            >
              <Text style={styles.boxLine4}></Text>
              <Text style={styles.boxText}>{"\n"} Settings</Text>
              <Ionicons name="settings" style={styles.boxText1}></Ionicons>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            navigation.dispatch(StackActions.replace("BankScreen"))
          }
        >
          <Text style={styles.footerText}>Add Your Bank Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DashboardScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    right: 130,
  },
  header: {
    flex: 0.3,
    padding: 30,
    left: 10,
    top: 10,
  },
  textHeader: {
    bottom: 60,
    right: 40,
  },
  body: {
    flex: 5,
    flexDirection: "column",
    width: 300,
  },
  content1: {
    flex: 1,
  },
  content2: {
    flex: 2,
    flexDirection: "column",
    bottom: 10,
  },
  content3: {
    flex: 2,
    flexDirection: "row",
    bottom: 10,
  },
  content4: {
    flex: 2,
    flexDirection: "row",
    bottom: 10,
  },
  topBox: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#E2DFDF",
    height: 110,
    top: 30
  },
  box1: {
    flex: 1,
    backgroundColor: "#E2DFDF",
    borderRadius: 15,
    marginRight: 12,
    marginBottom: 10,
    height: 150,
  },
  box2: {
    flex: 1,
    backgroundColor: "#E2DFDF",
    borderRadius: 15,
    marginBottom: 10,
    height: 150,
  },
  box3: {
    flex: 1,
    backgroundColor: "#E2DFDF",
    borderRadius: 15,
    marginRight: 12,
    marginBottom: 10,
    height: 150,
  },
  box4: {
    flex: 1,
    backgroundColor: "#E2DFDF",
    borderRadius: 15,
    marginBottom: 10,
    height: 150,
  },
  boxText: {
    padding: 20,
    fontSize: 16,
  },
  boxLine1: {
    padding: 10,
    borderBottomWidth: 3,
    width: 100,
    left: 20,
    borderColor: "#668CFF",
  },
  boxLine2: {
    padding: 10,
    borderBottomWidth: 3,
    width: 100,
    left: 20,
    borderColor: "#DD11B0",
  },
  boxLine3: {
    padding: 10,
    borderBottomWidth: 3,
    width: 100,
    left: 20,
    borderColor: "#FF9B00",
  },
  boxLine4: {
    padding: 10,
    borderBottomWidth: 3,
    width: 100,
    left: 20,
    borderColor: "black",
  },
  boxText1: {
    padding: 12,
    fontSize: 25,
    color: "#D25252",
    bottom: 10,
  },
  boxText2: {
    padding: 12,
    fontSize: 25,
    color: "#1EBCBC",
    bottom: 10,
  },
  boxText3: {
    padding: 12,
    fontSize: 25,
    color: "#57B894",
    bottom: 23,
  },
  boxText4: {
    padding: 12,
    fontSize: 25,
    color: "#D25252",
    bottom: 10,
  },
  topText: {
    color: "#564FA6",
    fontWeight: "bold",
    fontSize: 20,
  },
  money: {
    fontWeight: "bold",
    left: 180,
    fontSize: 17,
  },
  country: {
    fontWeight: "bold",
  },
  footer: {},
  buttonStyle: {
    padding: 12,
    backgroundColor: "#E2DFDF",
    borderRadius: 30,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20
  },
  footerText: {
    color:   "#FF9B00",
    fontWeight: "bold",
  },
});
