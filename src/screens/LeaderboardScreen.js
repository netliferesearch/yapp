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
            { 
              sortedList.map(function(sortedList, i) {
                return (
                  <View style={ styles.contestantWrapper } key={i}>
                    <Text style={ theme.h3 }>{ sortedList.numberOfYapps + " " + sortedList.username }</Text>
                  </View>
                  );
                })
            }
          <Text style={ theme.h3 }>{ sortedList[0].username } has taken the lead!</Text>
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
    flexBasis: 50
  }
});
