import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

function RegisterScreen(props) {
    return (
       <SafeAreaView style = {styles.container}>
           <View>
               <Text style = {styles.text}>Welcome to the Registration page</Text>
           </View>
       </SafeAreaView>
    );
}

export default RegisterScreen;
export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent:'center'
    },
    text:{
        color: 'white',
        alignItems:'center',
        justifyContent:'center'
    
      },
      buttonStyle:{
        padding: 12,
        backgroundColor:'lightgrey',
        borderRadius: 5,
       
      }
    });
    
