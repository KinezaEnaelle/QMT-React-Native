import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const SideMenuScreen = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} style={styles.sideMenu}>
                <View>
                    <DrawerItem icon={() => (
                        <FontAwesome name= 'dashboard' size={20}/>
                    )}
                    labelStyle={{fontWeight: 'bold'}}
                    label='Dashboard'
                    >

                    </DrawerItem>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default SideMenuScreen;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})