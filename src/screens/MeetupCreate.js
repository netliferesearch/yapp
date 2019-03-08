import React from "react";
import { View, Text, Button, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import firebase from "../../firebaseConfig";
import meetupListStyles from "../styles/meetupListStyles";

export default class MeetupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.createEvent = this.createEvent.bind(this);
    this.state = {
      event: {
        id: "123",
        title: "tittel", //
        attendees: ["222"],
        location: "oslo", //
        time: {
          //
          start: "11",
          end: "12"
        },
        creator: "278",
        attendeeLimit: -1, //
        tags: ["tag"] //
      }
    };
  }

  async createEvent() {
    const eventData = this.state.event;
    const eventId = await firebase.postEvent(eventData);
    // const events = await firebase.getAllEvents();

    // this.setState({ events });
    // console.log("event object", events);
    console.log("event State", this.state.event, eventId);
  }

  updateEvent(event) {
    console.log(event);
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={meetupListStyles.wrapper}>
        <Button
          title=""
          onPress={() => goBack()}
          icon={{
            name: "arrow-right",
            size: 15,
            color: "white"
          }}
        >
          "boop"
        </Button>

        <Input
          label="Title"
          placeholder="Title"
          leftIcon={{ type: "font-awesome", name: "arrow-left" }}
          onChangeText={title =>
            this.setState({
              event: { ...this.state.event, title }
            })
          }
        />

        <Picker
          prompt="Attendee limit"
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              event: { ...this.state.event, attendeeLimit: itemValue }
            })
          }
        >
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={tags =>
            this.setState({
              event: { ...this.state.event, tags }
            })
          }
        />
        <Text>Create a meetup here!</Text>
        <Button title="Beep" onPress={this.createEvent} />
      </View>
    );
  }
}
