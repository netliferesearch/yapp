import React from 'react';
import { Image, Text, View, Header } from 'react-native';
import * as yappLogo from '../../../assets/logo.svg';

const HeaderComponent = ({}) => {
    return (
        <View>
            <Header>
                <Text>You may call me Header</Text>
            </Header>
        </View>
    );
};

const styles = {
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    color: '#ffffff',
    alignItems: 'center',
    height: 100
}

export default HeaderComponent;