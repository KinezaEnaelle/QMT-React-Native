import React, { Fragment, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import DropDownPicker from "react-native-dropdown-picker";


function RegisterAccountScreen(props) {
  const [open1, setOpen1] = useState(false);
  const [bank, setBank] = useState(null);
  const [banks, setBanks] = useState([
    { label: "BANK1", value: "bank1" },
    { label: "BANK2", value: "bank2" },
  ]);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media3.picsearch.com/is?nRcRGte6978Y73p3-K2xUOd8LkvbBK4zmDCPLTgWRR8&height=256",
          }}
        />
        {/* <View style={styles.textHeader}>
          <Text>{fname + " " + lname}</Text>
          <Text style={styles.country}>{country}</Text>
        </View> */}
      </View>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>SAVE YOUR BANK ACCOUNT</Text>
        </View>
        <View style={styles.body}>
          <Formik>
            <Fragment>
              <DropDownPicker
                open={open1}
                value={bank}
                items={banks}
                setValue={setBank}
                setItems={setBanks}
                setOpen={setOpen1}
                searchable={false}
                placeholder="Choose Bank"
                placeholderStyle={{
                  color: "#adadad",
                }}
                style={{ borderColor: "#f2f2f2", top: 30 }}
              />
              <TextInput
                placeholder="Enter account name"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
              />
              <TextInput
                placeholder="Enter account number"
                placeholderTextColor="#C4C4C4"
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

export default RegisterAccountScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.3,
    padding: 10,
    left: 10,
    top: 1,
    backgroundColor: 'red',
  },
  box: {
    width: 350,
    height: 480,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    right: 130,
    top: 10,
  },
  textHeader: {
    bottom: 60,
    right: 40,
  },
  buttonStyle2: {
    padding: 12,
    backgroundColor: "#FF9B00",
    borderRadius: 30,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    bottom: 1,
    top: 50,
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
    top: 40,
    marginTop: 12,
  },
  textInput3: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    backgroundColor: "white",
    top: 50,
    marginTop: 12,
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
    top: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
//   titleText1: {
//     fontSize: 12,
//     fontWeight: "bold",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#FF9B00",
//   },
});
