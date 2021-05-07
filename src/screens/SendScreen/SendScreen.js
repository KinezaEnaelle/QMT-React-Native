import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";

function SendScreen(props) {
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
            <Formik>
              <Fragment>
                <TextInput
                  placeholder="Enter receiver’s full name"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Enter receiver’s phone number"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput1}
                />
                <TextInput
                  placeholder="Enter receiver’s country"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput2}
                />
                <Text>Sender's</Text>
                <TextInput
                  placeholder="Enter amount"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput3}
                />
                <TextInput
                  placeholder="Choose currency"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput4}
                />
                <Text>Receiver's</Text>
                <TextInput
                  placeholder="Choose currency"
                  placeholderTextColor="#C4C4C4"
                  style={styles.textInput5}
                />
                <TextInput
                  placeholder="Amount to be received"
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
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
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
});