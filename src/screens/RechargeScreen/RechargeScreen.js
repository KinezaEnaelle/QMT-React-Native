import React, { Fragment, useState } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";

function RechargeScreen(props) {
  const [open1, setOpen1] = useState(false);
  const [bank, setBank] = useState(null);
  const [banks, setBanks] = useState([
    { label: "BANK1", value: "bank1" },
    { label: "BANK2", value: "bank2" },
   
  ]);
  const [open2, setOpen2] = useState(false);
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState([
    { label: "ACCOUNT1", value: "account1" },
    { label: "ACCOUNT2", value: "account2" },
   
  ]);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Recharge</Text>
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
                placeholder='Choose Bank'
                placeholderStyle={{
                  color: "#adadad",
              }}
              style={{ borderColor: '#f2f2f2', top: 30}}
              />
              <DropDownPicker
                open={open2}
                value={account}
                items={accounts}
                setValue={setAccount}
                setItems={setAccounts}
                setOpen={setOpen2}
                searchable={false}
                placeholder='Choose Account'
                placeholderStyle={{
                  color: "#adadad",
              }}
              style={{ borderColor: '#f2f2f2', top: 45}}
              />
              <TextInput
                placeholder="Enter amount"
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
              navigation.navigate("WalletScreen")
            }
          >
            <Text style={styles.buttonText}>Recharge</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    );
}

export default RechargeScreen;
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
        width: 320,
        justifyContent: "center",
        alignItems: "center",
        bottom: 1,
        top: 60
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
        width: 350,
        height: 500,
        borderRadius: 25,
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
      textInput3: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        padding: 14,
        color: "#fff",
        backgroundColor: "white",
        top: 50,
        marginTop:12
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