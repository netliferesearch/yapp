import './firebaseConfig';
//import * as firebase from 'firebase';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';
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
  state = {
    isReady: false,
    fontLoaded: false,
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({'NetlifeY': require('./assets/fonts/Netlife_Y-Bold.ttf')});
    this.setState({fontLoaded: true, isReady: true});
  }
  componentWillMount() {
    this._loadFontsAsync();
  }
	render() {
    if( this.state.fontLoaded ){
      return (
        <Provider store={Store}>
          <StatusBar barStyle="dark-content"/>
          <AppContainer />
			  </Provider>
      );
    }
    else{
      return (
        <AppLoading
          startAsync={this._loadAssetAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />);
    }

  }
}
