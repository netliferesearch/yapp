import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F80303', color: '#fff'}}>
          <Text>Yapp!</Text>
          <Button
            title="Go to the Leaderboard"
            onPress={() => this.props.navigation.navigate('Leaderboard')}
          />
        </View>
      );
    }
  }