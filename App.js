import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Import screens
import HomeScreen from './src/components/layout/Home/home';
import LeaderboardScreen from './src/components/layout/Leaderboard/leaderboard';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Leaderboard: LeaderboardScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}