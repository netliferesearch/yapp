import React, { props } from "react";
import { View, Text, Button, MenuItem, FlatList } from "react-native";
import { DrawerItems } from 'react-navigation';
import theme from '../../styles/theme';


export default class Sidebar extends React.Component {
    render() {
      return (
        <View style={styles}>
            <Text style={ {color: 'white'} }>I am a funky text</Text>
        
        </View>
      );
    }
}

const styles = { 
    flex: 1, 
    backgroundColor: theme.colors.yellingRed, 
    color: 'white'
};
