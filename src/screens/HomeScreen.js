import React from "react";
import AnimateNumber from 'react-native-countup';
import { StyleSheet, View, TouchableOpacity, Text, Button, StatusBar } from "react-native";
import Header from '../components/Header/header';
import theme from '../styles/theme';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        totalYapps: 0
      }
    }
    static navigationOptions = {
        headerTitle: <Header />,
        headerStyle: { marginTop: 50, backgroundColor: theme.colors.yummyPink}
    }
    componentWillMount(){
      firebase.database()
              .ref('/dashboard')
              .on('value', snapshot => {
                  const dashboard = snapshot.val();
                  this.setState({ totalYapps: dashboard.countAll})
              });
    }
    render() {
      const totalYapps = this.state.totalYapps;
      return (
        <View style={ styles.screenWrapper }>
          <Text style={ theme.h3 }>Keep Yappin'! </Text>
          <Text style={ theme.h3 }>We are currently at</Text>
          <AnimateNumber style={styles.mainNumber} value={ totalYapps } countBy={ 3 }/>
          <Text style={ theme.h3 }>Yapps!</Text>
          <TouchableOpacity style={ theme.button } onPress={() => this.props.navigation.navigate('LeaderboardScreen')}>
            <Text style={ theme.buttonText }>Go to leaderboard</Text>
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
  