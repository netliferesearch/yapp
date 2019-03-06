import React from "react";
import { View, Text, Button } from "react-native";

export default class LeaderboardScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F80303', color: 'white'}}>
          <Text>Tatsumi has taken the lead!</Text>
          <Button
            title="Go to the Homescreen"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }