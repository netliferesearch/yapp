import React from "react";
import { View, Text, Button } from "react-native";

import Header from '../components/Header/header';

export default class LeaderboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contestants: ['Tatsumi', 'Jenny', 'Lars', 'Amir', 'Tore', 'Tommy', 'Jarle', 'Marte', 'Bjarne', 'Kjell-Arnt']
        }
    }
    
    static navigationOptions = {
        headerTitle: <Header title="LEADERBOARD"></Header>,
    }

    render() {
      const contestants = this.state.contestants;
      return (
        <View style={styles}>
            {contestants.map(function(contestant, i) {
                return <Text key={i}>{contestant}</Text>
            })}
          <Text>Tatsumi has taken the lead!</Text>
          <Button
            title="Go to the Homescreen"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }

const styles = { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#F3C1C1', 
    color: '#F80303'
};
