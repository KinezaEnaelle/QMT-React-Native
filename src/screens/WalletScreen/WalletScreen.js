import React from "react";
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import Pie from 'react-native-pie';

function WalletScreen(props) {
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
      <View style={styles.body}>
      <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}
          >
               <Pie
              radius={80}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />
          </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}

export default WalletScreen;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.3,
        padding: 10,
        left: 10,
        top: 1,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 100,
        right: 130,
      },
})
