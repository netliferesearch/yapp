import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import Header from '../components/Header/header';
import theme from '../styles/theme';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <Header />,
        headerStyle: { marginTop: 50, backgroundColor: theme.colors.yummyPink}
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.yummyPink, color: '#fff'}}>
          <Button
            title="Go to the Leaderboard"
            onPress={() => this.props.navigation.navigate('LeaderboardScreen')}
          />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open hamburger"
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
  