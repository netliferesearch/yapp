import React from "react";
import AnimateNumber from "react-native-countup";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  StatusBar
} from "react-native";
import Header from "../components/Header/header";
import theme from "../styles/theme";
import * as firebase from "firebase";
//import console = require("console");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalYapps: 0
    };
  }
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: { marginTop: 50, backgroundColor: theme.colors.yummyPink }
  };
  componentWillMount() {
    firebase
      .database()
      .ref("/dashboard")
      .on("value", snapshot => {
        const dashboard = snapshot.val();
        this.setState({ totalYapps: dashboard.countAll });
      });
  }
  render() {
    const totalYapps = this.state.totalYapps;
    return (
      <View style={styles.screenWrapper}>
        <Button
          title="List"
          onPress={() =>
            this.props.navigation.navigate({
              routeName: "MeetupList"
            })
          }
        />
        <Button
          title="schedule"
          onPress={() =>
            this.props.navigation.navigate({
              routeName: "MeetupSchedule"
            })
          }
        />
        <Button
          title="create"
          onPress={() =>
            this.props.navigation.navigate({
              routeName: "MeetupCreate"
            })
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.yummyPink,
    color: "#F80303"
  },
  mainNumber: {
    color: theme.colors.yellingRed,
    fontSize: 65,
    fontFamily: "NetlifeY",
    margin: 15
  }
});
