import React from "react";
import { View, Text, Button } from "react-native";
import Header from '../components/Header/header';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <Header title="YAPP!" />,
    }

    render() {
      return (
        <View style={styles}>
          <Text style={{color: 'white', fontSize: 55}}>Yapp!</Text>
          <Button
            title="Go to the Leaderboard"
            onPress={() => this.props.navigation.navigate('Leaderboard')}
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
}
  