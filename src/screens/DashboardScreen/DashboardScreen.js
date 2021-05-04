import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, Text,TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

function DashboardScreen() {
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
          <Text>Kineza Iris</Text>
          <Text>Rwanda</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Animatable.View style={styles.content1} animation='bounceInUp' duration={1500}>
          <View style={styles.topBox}>
            <Text>Balance</Text>
          </View>
        </Animatable.View>
        <View style={styles.content2}>
          <Animatable.View style={styles.content3} animation='bounceInLeft' duration={1500}>
            <TouchableOpacity style={styles.box1} onPress={() =>{}}>
            <Text style={styles.boxLine1}></Text>
            <Ionicons name='cash' style={styles.boxText}>
            <Text style={styles.boxText}>Hello</Text>
            </Ionicons>
                
                </TouchableOpacity>
            <TouchableOpacity style={styles.box2} onPress={() =>{}}>
            <Text style={styles.boxLine2}></Text>
            <Ionicons name='logo-bitcoin' style={styles.boxText}>
            <Text style={styles.boxText}>Hello</Text>
            </Ionicons>
                </TouchableOpacity>
          </Animatable.View>
          <Animatable.View style={styles.content4} animation='bounceInRight' duration={1500}>
            <TouchableOpacity style={styles.box3} onPress={() =>{}}>
            <Text style={styles.boxLine3}></Text>
            <Ionicons name='list-circle-sharp' style={styles.boxText}>
            <Text style={styles.boxText}>Hello</Text>
            </Ionicons>
                </TouchableOpacity>
            <TouchableOpacity style={styles.box4} onPress={() =>{}}>
            <Text style={styles.boxLine4}></Text>
            <Ionicons name='settings' style={styles.boxText}>
            <Text style={styles.boxText}>Hello</Text>
            </Ionicons>
                </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

export default DashboardScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    right: 130,
  },
  header: {
    flex: 1,
    padding: 30,
  },
  textHeader: {
    bottom: 60,
    right: 40,
  },
  body: {
    flex: 5,
    flexDirection: "column",
    width: 300,
  },
  content1: {
    flex: 1,
  },
  content2: {
    flex: 2,
    flexDirection: "column",
  },
  content3: {
    flex: 2,
    flexDirection: "row",
  },
  content4: {
    flex: 2,
    flexDirection: "row",
  },
  topBox: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "lightgrey",
    height: 150,
  },
  box1: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginRight: 12,
    marginBottom: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginBottom: 10,
  },
  box3: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginRight: 12,
    marginBottom: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    marginBottom: 10,
  },
  boxText: {
      padding: 20
  },
  boxLine1:{
      padding:10,
      borderBottomWidth:3,
      width: 100,
     left: 20,
     borderColor:'lightblue'
  },
  boxLine2:{
    padding:10,
    borderBottomWidth:3,
    width: 100,
   left: 20,
   borderColor:'pink'
},
boxLine3:{
    padding:10,
    borderBottomWidth:3,
    width: 100,
   left: 20,
   borderColor:'yellow'
},
boxLine4:{
    padding:10,
    borderBottomWidth:3,
    width: 100,
   left: 20,
   borderColor:'black'
}
});
