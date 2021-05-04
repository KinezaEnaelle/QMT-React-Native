import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";

function DashboardScreen () {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
          <View >
          </View>
          <Text style={styles.text}>Wlcome to dashboard</Text>
          <View>
          </View>
        </SafeAreaView>
      );
    }
    
    export default DashboardScreen;
    export const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue"
      },
      text: {
        justifyContent: 'center',
          alignItems: 'center',
          color: "red"
      }
    });