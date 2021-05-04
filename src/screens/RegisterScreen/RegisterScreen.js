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
import { BottomNavigation } from "react-native-paper";

function RegisterScreen(props) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Register</Text>
          <Text style={styles.titleText1}>Create your new QMT account</Text>
        </View>
        <View style={styles.body}>
          <Formik>
            <Fragment>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput1}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
              />
              <TextInput
                placeholder="Country"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput3}
              />
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput4}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput5}
              />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput6}
              />
            </Fragment>
          </Formik>
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.dispatch(StackActions.replace("DashboardScreen"))
            }
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
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
  box: {
    backgroundColor: "#E2DFDF",
    width: 290,
    height: 680,
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
    marginBottom: 10
  },
  textInput1: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput3: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput4: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput5: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput6: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInput7: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    marginBottom: 10
  },
  header: {
    top: 70,
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
