import React from "react";
import { StyleSheet, View, TouchableOpacity, Text} from "react-native";
import theme from '../styles/theme';
import * as firebase from 'firebase';

import Header from '../components/Header/header';
//import console = require("console");


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      totalYapps: 0,
      yapps: []
    }
  }
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: { marginTop: 50, backgroundColor: theme.colors.yummyPink}
  }
  componentWillMount(){
    firebase.database()
            .ref('/users/e000001')
            .on('value', snapshot => {
                const user = snapshot.val();
                this.setState(
                    {
                        totalYapps: user.count,
                        username: user.username,
                        yapps: user.yapps
                    });
            });
  }
  render() {
    const totalYapps = this.state.totalYapps;
    const username = this.state.username;
    const yapps = Object.values( this.state.yapps || {} );

    return (
      <View style={ styles.screenWrapper }>
        <Text style={ theme.h3 }>Keep Yappin', { username ? username : "anonymous" }!</Text>
        <Text style={ theme.h3 }>
            You have { totalYapps ? totalYapps : "0" } Yapps!
        </Text>
            { /*yapps.map((yapp) => {
                return <Text style={ theme.p }>Yapp stasjon: { yapp.station }</Text>;
            })*/ }
        <TouchableOpacity style={ theme.button } onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={ theme.buttonText }>Go back to homescreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    screenWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.yummyPink,
      color: '#F80303'
    },
    mainNumber: {
      color: theme.colors.yellingRed,
      fontSize: 65,
      fontFamily: 'NetlifeY',
      margin: 15
    }
  });