import React, { Fragment, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { getData } from "../../helper/storageHelper";
import { StackActions, useNavigation } from "@react-navigation/native";

function TransactionScreen(props) {
  const navigation = useNavigation();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  useEffect(()=>{
userInfo();
  },[])
  const userInfo = async () => {
    const fname = await getData("fname");
    const lname = await getData("lname");
    const country = await getData("country");
    setFname(fname);
    setLname(lname);
    setCountry(country);
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
      <Image
          style={styles.image}
          source={{
            uri: "https://media3.picsearch.com/is?nRcRGte6978Y73p3-K2xUOd8LkvbBK4zmDCPLTgWRR8&height=256",
          }}
        />
        <View style={styles.textHeader}>
          <Text>{fname + " " + lname}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.title}>TRANSACTION</Text>
            <Text style={styles.titleLine}></Text>
            <View style={styles.smallBox}>
              <View style={styles.smallContainer}>
                <Text style={styles.text1}>Sent</Text>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => navigation.navigate("SendReportScreen")}
                >
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.smallContainer}>
                <Text style={styles.text1}>Received</Text>
                <TouchableOpacity
                  style={styles.buttonStyle1}
                  onPress={() => navigation.navigate("ReceivedReportScreen")}
                >
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.smallContainer}>
                <Text style={styles.text1}>Recharge</Text>
                <TouchableOpacity
                  style={styles.buttonStyle2}
                  onPress={() => navigation.navigate("RechargeReportScreen")}
                >
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.smallContainer}>
                <Text style={styles.text1}>Deposit</Text>
                <TouchableOpacity
                  style={styles.buttonStyle3}
                  onPress={() => navigation.navigate("DepositReportScreen")}
                >
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.smallContainer}>
                <Text style={styles.text1}>All Transactions</Text>
                <TouchableOpacity
                  style={styles.buttonStyle4}
                  onPress={() => navigation.navigate("AllTransactionsScreen")}
                >
                  <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}

export default TransactionScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    right: 130,
  },
  header: {
    padding: 30,
    left: 120,
    top: 10,
  },
  textHeader: {
    bottom: 60,
    right: 40,
  },
  body: {
    flex: 1
  },
  box: {
    backgroundColor: "#FFCA78",
    width: 410,
    height: 900,
    borderTopRightRadius: 90,
  },
  boxContent: {
    padding: 33,
    paddingRight: 80,
  },
  smallBox: {
    backgroundColor: "#FFFAF1",
    position: 'relative',
    width: 350,
    height: 400,
    borderRadius: 25,
    top: 70,
    right: 27
  },
  title: {
    color: "#564FA6",
    fontSize: 20,
    fontWeight: "bold",
    top: 15,
    paddingBottom: 10,
  },
  titleLine: {
    padding: 10,
    borderBottomWidth: 3,
    width: 290,
    left: 20,
    borderColor: "#808080",
    bottom: 30,
  },
  smallContainer: {
    top: 30,
    flexDirection: "row",
  },
  text1: {
    fontSize: 18,
    padding: 15,
    color: "#474749",
  },
  buttonStyle: {
    padding: 5,
    backgroundColor: "#668CFF",
    borderRadius: 8,
    width: 80,
    left: 180,
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    justifyContent: "center",
    alignContent: "center",
    padding: 12,
    bottom: 8,
    left: 5,
  },
  buttonStyle1: {
    padding: 5,
    backgroundColor: "#668CFF",
    borderRadius: 8,
    width: 80,
    left: 145,
    height: 40,
  },
  buttonStyle2: {
    padding: 5,
    backgroundColor: "#668CFF",
    borderRadius: 8,
    width: 80,
    left: 145,
    height: 40,
  },
  buttonStyle3: {
    padding: 5,
    backgroundColor: "#668CFF",
    borderRadius: 8,
    width: 80,
    left: 159,
    height: 40,
  },
  buttonStyle4: {
    padding: 5,
    backgroundColor: "#668CFF",
    borderRadius: 8,
    width: 80,
    left: 90,
    height: 40
  },
});
