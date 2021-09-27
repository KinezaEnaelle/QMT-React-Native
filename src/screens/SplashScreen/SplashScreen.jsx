import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { StackActions } from '@react-navigation/native';
import { getData } from '../../helper/storageHelper';
import { useApi } from '../../context/Api';

function SplashScreen() {
    const navigation = useNavigation();
    const api = useApi();
    useEffect(() => {
     const getToken = async () => {
         const token = await getData('token');
         const role = await getData('role');
         if (token === null) {
             navigation.dispatch(StackActions.replace('LoginScreen'))
         } else {
             api.defaults.headers.common['Authorization'] = token;
             navigation.dispatch(StackActions.replace('DashboardScreen'))
         }
     };
     getToken();
    }, []);
return <View></View>
}

export default SplashScreen;