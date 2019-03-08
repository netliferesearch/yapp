import React from "react";
import { SafeAreaView } from "react-native";
import { DrawerItems } from 'react-navigation';
import Header from '../Header/header';
import theme from '../../styles/theme';
import { ScrollView } from "react-native-gesture-handler";

const Sidebar = (props) => (
    <SafeAreaView style={ {flex: 1, backgroundColor: theme.colors.yellingRed} }>
        <Header sidebar/>
        <ScrollView style={{backgroundColor: theme.colors.yellingRed, color: 'white'}}>
            <DrawerItems {...props} 
                activeTintColor={theme.colors.yellingRed}
                activeBackgroundColor='rgba(0, 0, 0, .04)' 
                inactiveTintColor='rgba(0, 0, 0, .87)' 
                inactiveBackgroundColor='transparent' 
                labelStyle={{color: '#ffffff'}}
                fontFamily={'NetlifeY'}
            />
        </ScrollView>
    </SafeAreaView>
);

export default Sidebar;