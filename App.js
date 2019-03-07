import './firebaseConfig';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store';

import { createStackNavigator, createAppContainer } from "react-navigation";

// Import screens
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    Home: HomeScreen,
    Leaderboard: LeaderboardScreen
  },
  {
    initialRouteName: 'Signup'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={Store}>
        <StatusBar barStyle="dark-content"/>
        <AppContainer />
			</Provider>
		);
	}
}
