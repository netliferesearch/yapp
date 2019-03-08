import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import meetupListStyles from "../styles/meetupListStyles";
import firebase from '../../firebaseConfig';

export default class MeetupList extends React.Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      events:  [],
    }
  }

  componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    const events = await firebase.getAllEvents();
    console.log('events', events);
    
    this.setState({ events: Object.keys(events).map(elem => events[elem]) });
    console.log('events', events);
  }

  renderEvent(event) {
    const {
      id = '',
      title = '',
      creator = '',
      attendees = [],
      time = {},
      location = '',
      sponsor = '',
    } = event;

    const { // TODO: Use
      start = '',
      end = ''
    } = time;

    const othersText = attendees.length === 1 ? ' other' : ' others';

    const attendeesText = `${creator.toUpperCase()} ${attendees.length ? ('and ' + attendees.length + othersText) : ''}`;

    return (
      <TouchableHighlight
        onPress={() => this.navigate("MeetupEvent", { event })}
      >
        <View
          style={meetupListStyles.listItem}
        >
          <Text style={meetupListStyles.titleText}>{title.toUpperCase()}</Text>
          {event.sponsor &&
            <Text style={meetupListStyles.sponsorText}>{`(Sponsored by ${sponsor})`}</Text>
          }
          <Text style={meetupListStyles.subTitleText}>{attendeesText}</Text>
          <Text style={meetupListStyles.subTitleText}>{`${location}, 10min left`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const {
      events = []
    } = this.state;

    return (
      <View style={meetupListStyles.wrapper}>
        <View style={meetupListStyles.screenTitle_wrapper}>
          <Text style={meetupListStyles.screenTitle}>{'PEOPLE ARE\nYAPPING ABOUT'}</Text>
        </View>
        <FlatList
          data={events}
          renderItem={({item}) => this.renderEvent(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  }