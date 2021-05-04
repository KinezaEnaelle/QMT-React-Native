import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";

function BankScreen(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Register Bank Account</Text>
        </View>
        <View style={styles.body}>
          <Formik>
            <Fragment>
              <TextInput
                placeholder="Enter Bank name"
                placeholderTextColor="#474749"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Enter  Account name "
                placeholderTextColor="#474749"
                style={styles.textInput2}
              />
              <TextInput
                placeholder="Enter Account number"
                placeholderTextColor="#474749"
                style={styles.textInput3}
              />
            </Fragment>
          </Formik>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() =>
              navigation.dispatch(StackActions.replace("RegisterScreen"))
            }
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BankScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle2: {
    padding: 12,
    backgroundColor: "#FF9B00",
    borderRadius: 30,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  box: {
    backgroundColor: "white",
    width: 290,
    height: 450,
    borderRadius: 25,
  },
  body: {
    padding: 12,
    top: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E2DFDF",
    borderRadius: 12,
    padding: 12,
    color: "#474749",
    backgroundColor: "#E2DFDF",
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "#E2DFDF",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "#E2DFDF",
    top: 10,
  },
  textInput3: {
    borderWidth: 1,
    borderColor: "#E2DFDF",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "#E2DFDF",
    top: 10,
    marginTop: 12,
  },
  header: {
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  body1: {
    top: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    top: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText1: {
    fontSize: 12,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#FF9B00",
  },
});
