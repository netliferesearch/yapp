import "./firebaseConfig";
//import * as firebase from 'firebase';
import React from "react";
import { StatusBar, StyleSheet, ScrollView, View } from "react-native";
import { Provider } from "react-redux";
import { Font, AppLoading } from "expo";
import Store from "./Store";
import theme from "./src/styles/theme";
import { Constants } from "expo";
import {
  DrawerItems,
  SafeAreaView,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

// Import screens
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";
import MeetupListScreen from "./src/screens/MeetupList";
import MeetupEventScreen from "./src/screens/MeetupEvent";
import MeetupCreateScreen from "./src/screens/MeetupCreate";

import Sidebar from "./src/components/Sidebar/sidebar";

const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    MeetupList: MeetupListScreen,
    MeetupEvent: MeetupEventScreen,
    MeetupCreate: MeetupCreateScreen
  },
  {
    initialRouteName: "MeetupList",
    defaultNavigationOptions: {
      headerLeft: null,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: 120,
        backgroundColor: theme.colors.yummyPink
      }
    }
  }
);

const HomeScreenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "HomeScreen",
      drawerLabel: "Home"
    })
  }
);

const LeaderboardScreenStack = createStackNavigator(
  {
    LeaderboardScreen: {
      screen: LeaderboardScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "LeaderboardScreen",
      drawerLabel: "Leaderboard"
    })
  }
);

const MeetupListStack = createStackNavigator(
  {
    MeetupList: {
      screen: MeetupListScreen
    },
    MeetupEvent: {
      screen: MeetupEventScreen
    },
    MeetupCreate: {
      screen: MeetupCreateScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "MeetupListScreen",
      drawerLabel: "Meetups"
    })
  }
);

const AppNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      name: "HomeScreenStack",
      screen: MeetupListStack
    },
    LeaderboardScreen: {
      name: "LeaderboardScreenStack",
      screen: LeaderboardScreenStack
    },
    MeetupListScreen: {
      name: "MeetupListStack",
      screen: MeetupListStack
    }
  },
  {
    contentComponent: Sidebar
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    isReady: false,
    fontLoaded: false
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      NetlifeY: require("./assets/fonts/Netlife_Y-Bold.ttf")
    });
    this.setState({ fontLoaded: true, isReady: true });
  };
  componentWillMount() {
    this._loadFontsAsync();
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={Store}>
          <StatusBar barStyle="dark-content" />
          <AppContainer />
        </Provider>
      );
    } else {
      return (
        <AppLoading
          startAsync={this._loadAssetAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
  }
}
