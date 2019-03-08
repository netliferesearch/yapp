import React from "react";
import { SafeAreaView } from "react-native";
import { DrawerItems } from 'react-navigation';
import Header from '../Header/header';
import theme from '../../styles/theme';
import { ScrollView } from "react-native-gesture-handler";

const Sidebar = (props) => (
    <SafeAreaView style={ {flex: 1} }>
        <Header sidebar/>
        <ScrollView style={{backgroundColor: theme.colors.yellingRed, colors: 'white'}}>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

export default Sidebar;