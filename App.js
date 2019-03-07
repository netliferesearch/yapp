import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";

import { createStackNavigator, createAppContainer } from "react-navigation";

// Import screens
import HomeScreen from "./src/components/layout/Home/home";
import LeaderboardScreen from "./src/components/layout/Leaderboard/leaderboard";
import MeetupListScreen from "./src/components/layout/MeetupList/meetupList";
import MeetupEventScreen from "./src/components/layout/MeetupEvent/meetupEvent";
import MeetupCreateScreen from "./src/components/layout/MeetupCreate/meetupCreate";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Leaderboard: LeaderboardScreen,
    MeetupList: MeetupListScreen,
    MeetupEvent: MeetupEventScreen,
    MeetupCreate: MeetupCreateScreen
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
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </Provider>
    );
  }
}
