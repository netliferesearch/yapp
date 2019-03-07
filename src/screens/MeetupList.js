import React from "react";
import { View, Text, Button } from "react-native";

export default class MeetupList extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F80303', color: 'white'}}>
          <Text>Amir has taken the lead!</Text>
          <Button
            title="Go to the Homescreen"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="See meetup info"
            onPress={() => this.props.navigation.navigate('MeetupEvent')}
          />
          <Button
            title="Create a meetup"
            onPress={() => this.props.navigation.navigate('MeetupCreate')}
          />
        </View>
      );
    }
  }