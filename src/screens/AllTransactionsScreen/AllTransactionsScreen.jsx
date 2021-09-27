import React, { Fragment, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { getData } from "../../helper/storageHelper";
import { StackActions, useNavigation } from "@react-navigation/native";
import useTransactions from '../../hooks/transaction/useTransaction';
import { TextInput } from "react-native-gesture-handler";


function AllTransactionsScreen() {
  const transactionHook = useTransactions();
  const [transactions, setTransactions] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    transactionInfo();
    userInfo();
  },[])
  useEffect(() => {
    if(transactionHook.successResponse){
      setTransactions([...transactionHook.successResponse.data])
    }

  },[transactionHook.successResponse.data])
  const transactionInfo = async() => {
    transactionHook.sendRequest();
  }
  const userInfo = async () => {
    const fname = await getData("fname");
    const lname = await getData("lname");
    const country = await getData("country");
    setFname(fname);
    setLname(lname);
    setCountry(country);
  };
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.titleBox}>
          <Text style={styles.title}>All Transactions</Text>
        </View>
        <View style={styles.box}>
          <ScrollView>
          {transactions !== null && transactions.map(t=>
          <Fragment key={`${t.id}`}>
          <Text style={styles.boxText}>TRANSACTIONS ID: {t.transactionId}</Text>
          <Text style={styles.boxText}>NAME OF SENDER: {t.senderName}</Text>
          <Text style={styles.boxText}>NAME OF RECEIVER: {t.receiverName}</Text>
          <Text style={styles.boxText}>AMOUNT SENT: {t.amountSent}</Text>
          <Text style={styles.boxText}>AMOUNT RECEIVED: {t.amountReceived}</Text>
          <Text style={styles.boxText}>EXCHANGE RATE: {t.exchangeRate}</Text>
          <Text style={styles.boxText}>TRANSACTIONS TYPE: {t.transactionType}</Text>
          <Text style={styles.boxText}>DATE: {t.createdAt}</Text>
          </Fragment>
          )}  
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default AllTransactionsScreen;
export const styles = StyleSheet.create ({
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
        flex: 0.3,
        padding: 30,
        left: 10,
        top: 10,
      },
      body: {
        flex: 1.8
          // backgroundColor: "#E5E5E5"
      },
      textHeader: {
        bottom: 60,
        right: 40,
      },
      titleBox: {
          width:380,
          height:130,
          padding: 12,
          backgroundColor: "#FFCA78",
      },
      title: {
        color: "#564FA6",
        fontSize: 20,
        fontWeight: "bold",
        top: 15,
        padding: 12,
      },
      box: {
          width:390,
          height:500,
          backgroundColor: "lightgrey",
          borderColor: 'red',
          padding: 20,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          bottom: 17
      },
      boxText: {
        fontSize: 14,
        padding: 5,
        color: "#474749",
      },
});
