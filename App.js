
import React from 'react';
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

// Start has redux. Remove this file.
// import Start from './src/components/Start';

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
		return (
			<Provider store={Store}>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <AppContainer />
        </SafeAreaView>
			</Provider>
		);
	}
}
