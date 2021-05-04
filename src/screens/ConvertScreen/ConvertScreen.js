import React, { useEffect, useState, Fragment } from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Button } from "react-native-paper";

function ConvertScreen() {
  // _menu = null;

  // setMenuRef = ref => {
  //   this._menu = ref;
  // };

  // hideMenu = () => {
  //   this._menu.hide();
  // };

  // showMenu = () => {
  //   this._menu.show();
  // };
  return (
    <SafeAreaView style={styles.container}>
       {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu}>
            <Ionicons name='md-menu' style={styles.icons}></Ionicons>
            Show menu</Text>}
        >
          <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled>
            Menu item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
        </Menu>
      </View> */}
      <View style={styles.header}>
      <Image
          source={{
            uri:
              "https://media3.picsearch.com/is?nRcRGte6978Y73p3-K2xUOd8LkvbBK4zmDCPLTgWRR8&height=256",
          }}
          style={styles.image} 
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Enter amount to exchnage</Text>
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
              <TextInput
                placeholder="Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
              />
            </Fragment>
          </Formik>
          <Button style={styles.button}>Convert</Button>
      </View>
      <View style={styles.footer}>
      </View>
    </SafeAreaView>
  );
}

export default ConvertScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    margin: 10,
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  body: {
    alignItems: "stretch",
    flex: 1,
    width: "100%",
    backgroundColor: "#474749",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  title: {
    color: "white",
    fontSize: 16
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
  button: {
    padding: 8,
    backgroundColor: "#FF9B00",
    borderRadius: 35,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 12,
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});