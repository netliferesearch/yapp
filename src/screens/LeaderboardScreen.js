import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import theme from '../styles/theme';

import Header from '../components/Header/header';
//import console = require("console");

export default class LeaderboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contestants: [ //example
                          {
                            username: 'Tatsumi',
                            numberOfYapps: 25
                          }, 
                          {
                            username: 'Jenny',
                            numberOfYapps: 13
                          },
                          {
                            username: 'Lars',
                            numberOfYapps: 15
                          },
                          {
                            username: 'Amir',
                            numberOfYapps: 20
                          },
                          {
                            username: 'Tore',
                            numberOfYapps: 17
                          },
                          { 
                            username: 'Tommy',
                            numberOfYapps: 12
                          }
                        ]
        }
    }

    static navigationOptions = {
      headerTitle: <Header />,
      headerStyle: { marginTop: 50, backgroundColor: theme.colors.yummyPink}
    }

    render() {
      const contestants = this.state.contestants;
      const sortedList = contestants.sort((a, b) => {
        return b.numberOfYapps - a.numberOfYapps;
      })
      return (
        <View style={ styles.screenWrapper }>
        <View style={ styles.contestantWrapper }>
            { 
              sortedList.map(function(sortedList, i) {
                return (
                  
                    <Text key={i} style={ theme.h3 }>{ sortedList.numberOfYapps + " Yapps! -> " + sortedList.username }</Text>
                  );
                })
            }
          </View>
          <Text style={[ styles.leaderName ]}>{ sortedList[0].username }</Text> 
          <Text style={[ styles.leaderNote ]}>has taken the lead!</Text>
          <TouchableOpacity style={ theme.button } onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={ theme.buttonText }>Go to homescreen</Text>
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
  contestantWrapper: {
    margin: 20
  },
  leaderName: {
    fontSize: 40,
    fontFamily: 'NetlifeY',
    color: theme.colors.yellingRed,
    marginTop: 20,
    marginBottom: 5
  },
  leaderNote: {
    fontSize: 25,
    fontFamily: 'NetlifeY',
    color: theme.colors.yellingRed
  }
});
