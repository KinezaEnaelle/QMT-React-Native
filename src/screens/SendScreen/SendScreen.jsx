import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Yup from 'yup'
import { StackActions, useNavigation } from "@react-navigation/native";
import useSendWallet from "../../hooks/wallet/useSendWallet";
import { getData } from "../../helper/storageHelper";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";

function SendScreen() {
  const sendWalletHook = useSendWallet();
  // const [open, setOpen] = useState(false);
  // const [country, setCountry] = useState(null);
  // const [countries, setCountries] = useState([
  //   { label: "RWANDA", value: "rwanda" },
  //   { label: "BURUNDI", value: "burundi" },
  //   { label: "UGANDA", value: "uganda" },
  //   { label: "TANZANIA", value: "tanzania" },
  //   { label: "KENYA", value: "kenya" },
  // ]);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.title}>
            <Text style={styles.titleText}>Send Money</Text>
            <Text style={styles.titleText1}>All Transactions</Text>
          </View>
          <View style={styles.body}>
            <Formik initialValues={{
            amount: '',
            phoneNumber: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            amount: Yup.string().required('No amount provided'),
            phoneNumber: Yup.string().required('No phoneNumber provided'),
            password: Yup.string().required('No password provided'),
          })}
          onSubmit={({ amount, phoneNumber, password}) => {
            sendWalletHook.sendRequest(amount, phoneNumber, password);
            navigation.navigate('DashboardScreen');
          }}>
            {(props) => {
              return (
              <Fragment>
                <TextInput
                  placeholder="Enter amount"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput1}
                  value={props.values.amount}
                onChangeText={props.handleChange('amount')}
                onSubmitEditing={() => props.setFieldTouched('amount')}
                />
                 {props.errors.amount && (
                <Text style={styles.errorPrompt}>{props.errors.amount}</Text>
              )}
                <TextInput
                  placeholder="Enter phoneNumber"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput2}
                  value={props.values.phoneNumber}
                onChangeText={props.handleChange('phoneNumber')}
                onSubmitEditing={() => props.setFieldTouched('phoneNumber')}
                />
                 {props.errors.phoneNumber && (
                <Text style={styles.errorPrompt}>{props.errors.phoneNumber}</Text>
              )}
                <TextInput
                  placeholder="Enter password"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput3}
                  value={props.values.password}
                onChangeText={props.handleChange('password')}
                onSubmitEditing={() => props.setFieldTouched('password')}
                />
                {props.errors.password && (
                <Text style={styles.errorPrompt}>{props.errors.password}</Text>
              )}
              <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.handleSubmit}
            disabled={sendWalletHook.isLoading}
          >
            <Text style={styles.buttonText}>{!sendWalletHook.isLoading ? 'Send Money' : 'Loading...'}</Text>
          </TouchableOpacity>
          {sendWalletHook.error && (
            <Text style={styles.errorPrompt}>
              {sendWalletHook?.error?.data?.error || 'Could not make request'}
            </Text>
          )}
          {sendWalletHook.successResponse && sendWalletHook.successResponse.message && (
            <Text style={styles.successPrompt}>
              {sendWalletHook?.successResponse?.message || 'Could not make request'}
            </Text>
          )}
              </Fragment>
              )
            }}
            </Formik>
          </View>
          <View style={styles.header}>
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("DashboardScreen")
              }
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </SafeAreaView>
    );
}

export default SendScreen;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonStyle: {
        padding: 12,
        backgroundColor: "#FF9B00",
        borderRadius: 30,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
      },
      buttonText: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
      },
      body: {
        padding: 12,
        top: 30,
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
        color: "black",
        backgroundColor: "white",
        marginBottom: 10
      },
      textInput2: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        padding: 14,
        color: "black",
        backgroundColor: "white",
        marginBottom: 10
      },
      textInput3: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        padding: 14,
        color: "black",
        backgroundColor: "white",
        marginBottom: 10
      },
      textInput4: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        padding: 14,
        color: "black",
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
        top: 50,
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
      errorPrompt: {
        padding: 14,
        color: '#ff2a00',
      },
      successPrompt: {
        padding: 14,
        color: 'green',
      }
});