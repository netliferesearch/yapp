import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import firebase from '../../firebaseConfig';

export default class MeetupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.createEvent = this.createEvent.bind(this);
    this.state = {
      event: {
        id: '123',
        title: 'tittel',
        attendees: ['222'],
        location: 'oslo',
        time: {
          start: '11',
          end: '12',
        },
        creator: '278',
        attendeeLimit: -1,
        tags: ['tag'],
      },
    };
  }

  async createEvent() {
    const eventData = this.state.event;
    const eventId = await firebase.postEvent(eventData);
    console.log('eventId', eventId);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F80303',
          color: 'white',
        }}
      >
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          onChangeText={title =>
            this.setState({
              event: { ...this.state.event, title }
            })
          }
        />
        <Text>Create a meetup here!</Text>
        <Button title="Beep" onPress={this.createEvent} />
      </View>
    );
  }
}
