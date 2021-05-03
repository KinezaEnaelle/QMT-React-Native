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

function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Log in</Text>
          <Text style={styles.titleText1}>To continue to QMT</Text>
        </View>
        <View style={styles.body}>
          <Formik>
            <Fragment>
              <TextInput
                placeholder="Email or Phone"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
              />
            </Fragment>
          </Formik>
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.dispatch(StackActions.replace("ConvertScreen"))
            }
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body1}>
          <Text>Don’t have an account?</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() =>
              navigation.dispatch(StackActions.replace("RegisterScreen"))
            }
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    padding: 12,
    backgroundColor: "#668CFF",
    borderRadius: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle2: {
    padding: 12,
    backgroundColor: "#FF9B00",
    borderRadius: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#E2DFDF",
    width: 290,
    height: 450,
    borderRadius: 8,
  },
  body: {
    padding: 12,
    top: 50,
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
