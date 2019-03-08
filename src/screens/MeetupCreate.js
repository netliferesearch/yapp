import React from "react";
import { View, Text, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, ButtonGroup } from "react-native-elements";
import firebase from "../../firebaseConfig";
import meetupListStyles from "../styles/meetupListStyles";

export default class MeetupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.createEvent = this.createEvent.bind(this);
    const {
      id,
      attendees,
      location,
      time,
      creator
    } = this.props.navigation.getParam("createProps", {});
    this.state = {
      event: {
        id: id || "123",
        title: "Hvordan CSS reddet verden. Et retrospektiv", //
        attendees: attendees || ["278"],
        location: location || "Bord 12", //
        time: time || {
          //
          start: "11",
          end: "12"
        },
        creator: creator || { id: "278", name: "The Silver Surfer" },
        attendeeLimit: 3, //
        tags: ["tag"] //
      }
    };
  }

  async createEvent() {
    const eventData = this.state.event;
    const eventId = await firebase.postEvent(eventData);
    console.log("event State", this.state.event, eventId);
  }

  updateEvent(event) {
    console.log(event);
  }

  render() {
    const { goBack } = this.props.navigation;
    const suggestions = ["Hello", "World", "Buttons"];

    return (
      <View style={meetupListStyles.wrapper}>
        <Button
          title=""
          onPress={() => goBack()}
          icon={{
            name: "arrow-back",
            size: 15,
            color: "white"
          }}
        />

        <Text style={meetupListStyles.screenTitle} numberOfLines={5}>
          {this.state.event.location}
        </Text>

        <Text style={meetupListStyles.screenTitle} numberOfLines={5}>
          {this.state.event.time.start} - {this.state.event.time.end}
        </Text>

        <Text style={meetupListStyles.subTitleText} numberOfLines={5}>
          I WANT TO YAPP ABOUT
        </Text>

        <Input
          label="UX? Sustainability? Game of Thrones? Make it short and sweet."
          style={meetupListStyles.listItem}
          placeholder="Title"
          leftIcon={{ type: "font-awesome", name: "arrow-left" }}
          onChangeText={title =>
            this.setState({
              event: { ...this.state.event, title }
            })
          }
        />

        <ButtonGroup
          onPress={index =>
            this.setState({
              event: { ...this.state.event, title: suggestions[index] }
            })
          }
          selectedIndex={selectedIndex}
          buttons={suggestions}
          containerStyle={{ height: 100 }}
        />

        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={tag =>
            this.setState({
              event: { ...this.state.event, tags: [...this.state.tags, tag] }
            })
          }
        />
        <Text>Create a meetup here!</Text>
        <Button
          title="CLAIM THIS YAPP"
          onPress={() => {
            this.createEvent;
            this.props.navigation.navigate({
              routeName: "MeetupEvent",
              params: { event: this.state.event }
            });
          }}
        />
      </View>
    );
  }
}
