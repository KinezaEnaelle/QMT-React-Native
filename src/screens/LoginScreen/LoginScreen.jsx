import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Yup from 'yup'
import { useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { storeData, storeNumber } from "../../helper/storageHelper";
import { Formik } from "formik";
import useLogin from "../../hooks/auth/useLogin";
import {useApi} from '../../context/Api';

function LoginScreen() {
  const loginHook = useLogin();
  const api = useApi();
  const navigation = useNavigation();
  useEffect(() => {
if (loginHook.isSuccess) {
  if(loginHook.successResponse.data.userData.role === 'USER'){
    navigation.dispatch(StackActions.replace('DashboardScreen'));
    storeData("token", loginHook.successResponse.data.token);
    storeNumber("id", loginHook.successResponse.data.userData.id);
    storeData("fname", loginHook.successResponse.data.userData.fname);
    storeData("lname", loginHook.successResponse.data.userData.lname);
    storeData("country", loginHook.successResponse.data.userData.country);
    api.defaults.headers.common["Authorization"] =
            loginHook.successResponse.data.token;
  }
}
},[loginHook.isSuccess])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Log in</Text>
          <Text style={styles.titleText1}>To continue to QMT</Text>
        </View>
        <View style={styles.body}>
          <Formik initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required('No email provided').email('invalid email'),
            password: Yup.string().required('No password provided'),
          })}
          onSubmit={({ email, password}) => {
            loginHook.sendRequest(email, password);
          }}>
            {(props) => {
              return (
                <Fragment>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput}
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onSubmitEditing={() => props.setFieldTouched('email')}
              />
              {props.errors.email && (
                <Text style={styles.errorPrompt}>{props.errors.email}</Text>
              )}
              <TextInput
                placeholder="Password"
                placeholderTextColor="#C4C4C4"
                style={styles.textInput2}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onSubmitEditing={() => props.setFieldTouched('password')}
              />
              {props.errors.password && (
                <Text style={styles.errorPrompt}>{props.errors.password}</Text>
              )}
              <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={props.handleSubmit}
            disabled={loginHook.isLoading}
          >
            <Text style={styles.buttonText}>{!loginHook.isLoading ? 'Login' : 'Loading...'}</Text>
          </TouchableOpacity>
          {loginHook.error && (
            <Text style={styles.errorPrompt}>
              {loginHook?.error?.data?.error || 'Could not make request'}
            </Text>
          )}
        </View>
        <View style={styles.body1}>
          <Text>Don’t have an account?</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() =>
              navigation.dispatch(StackActions.replace("RegisterScreen"))
            }
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
            </Fragment>
              )
            }}
            
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    padding: 12,
    backgroundColor: "#668CFF",
    borderRadius: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle2: {
    padding: 12,
    backgroundColor: "#FF9B00",
    borderRadius: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  // textStyle: {
  //   color: "black",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  box: {
    backgroundColor: "#E2DFDF",
    width: 290,
    height: 490,
    borderRadius: 8,
  },
  body: {
    padding: 12,
    top: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 12,
    color: 'black',
    backgroundColor: "white",
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    padding: 14,
    color: "black",
    backgroundColor: "white",
    top: 10,
  },
  header: {
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  body1: {
    top: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    top: 110,
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
    color: '#ff2a00'
  }
});
