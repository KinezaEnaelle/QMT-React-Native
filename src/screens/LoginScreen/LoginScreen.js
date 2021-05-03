import React,{Fragment} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import {Formik} from 'formik'

function LoginScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.body}>
                    <Formik>
                    <Fragment>
                    <TextInput 
                    placeholder='Email'
                    placeholderTextColor='black'
                    style={styles.textInput}
                    />
                </Fragment>
                    </Formik>
                
                </View>
                
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
 export const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent:'center'
     },
     text:{
        color: 'blue',
        alignItems:'center',
        justifyContent:'center'
    
      },
      buttonStyle:{
        padding: 12,
        backgroundColor:'black',
        borderRadius: 5,
       
      },
      textStyle:{
        color: 'pink',
        alignItems:'center',
        justifyContent:'center'
      },
      box: {
          backgroundColor: 'lightgrey',
          width: 290,
          height: 600,
      },
      body: {
          padding:12
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#8c8c8c",
        borderRadius: 12,
        padding: 14,
        color: "#fff",
        backgroundColor:'white'
      }
    });
    