import React, { useEffect, useState, Fragment } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Button } from "react-native-paper";

function ConvertScreen() {
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
        <Text style={styles.title}>Enter amount to exchnage</Text>
        <Formik>
          <Fragment>
            <TextInput
              placeholder="Choose currency"
              placeholderTextColor="#C4C4C4"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Enter amount"
              placeholderTextColor="#C4C4C4"
              style={styles.textInput2}
            />
            <TextInput
              placeholder="Choose currency"
              placeholderTextColor="#C4C4C4"
              style={styles.textInput2}
            />
            <TextInput
              placeholder="Your amount"
              placeholderTextColor="#C4C4C4"
              style={styles.textInput2}
            />
          </Fragment>
        </Formik>
        <Button style={styles.button}>Convert</Button>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}

export default ConvertScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
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
    top: 10
  },
  textHeader: {
    bottom: 60,
    right: 40,
  },
  body: {
    alignItems: "stretch",
    flex: 1.2,
    width: "100%",
    backgroundColor: "#474749",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    // borderBottomLeftRadius: 35,
    // borderBottomRightRadius: 35,
  },
  title: {
    color: "black",
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 12,
    color: "#fff",
    backgroundColor: "white",
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    top: 10,
  },
  button: {
    padding: 8,
    backgroundColor: "#FF9B00",
    borderRadius: 35,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 12,
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});
