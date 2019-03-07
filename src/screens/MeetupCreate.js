import React from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import firebase from "../../firebaseConfig";

const createEvent = () => {
  console.log("funkies", JSON.stringify(firebase.postName({ name: "test" })));
};

export default class MeetupCreate extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F80303",
          color: "white"
        }}
      >
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={createEvent}
        />
        <Text>Create a meetup here!</Text>
        <Button title="Beep" onPress={createEvent} />
      </View>
    );
  }
}
