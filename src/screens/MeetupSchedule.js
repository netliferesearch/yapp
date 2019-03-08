import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Picker } from 'react-native';
import meetupListStyles from '../styles/meetupListStyles';
import firebase from '../../firebaseConfig';

export default class MeetupSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
    this.createLocationsList = this.createLocationsList.bind(this);
    this.renderLocationsList = this.renderLocationsList.bind(this);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      events: [],
      locations: ['- SHOW EVERYTHING -'],
      selectedLocation: '- SHOW EVERYTHING -',
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    const events = await firebase.getAllEvents();
    this.setState({ events: Object.keys(events).map(elem => events[elem]) });
    this.createLocationsList(this.state.events);
  }

  // Extract unique locations into it's own array
  createLocationsList(events) {
    events.map(event => {
      const location = event.location;
      const locations = this.state.locations;
      if (locations.indexOf(location) == -1) {
        this.setState({ locations: [...this.state.locations, event.location] });
      }
    });
  }

  renderLocationsList() {
    const locations = this.state.locations;
    let sortedLocations = locations.sort();

    return (
      <View>
        <Text style={meetupListStyles.screenTitle}>YAPP LOCATION</Text>
        <Picker
          selectedValue={this.state.selectedLocation}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedLocation: itemValue })}
        >
          {sortedLocations.map(location => (
            <Picker.Item label={location} value={location} key={location} />
          ))}
        </Picker>
      </View>
    );
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

    const {
      // TODO: Use
      start = '',
      end = '',
    } = time;

    const othersText = attendees.length === 1 ? ' other' : ' others';

    return (
      <TouchableHighlight onPress={() => this.navigate('MeetupEvent', { event })}>
        <View style={meetupListStyles.listItem}>
          <Text style={meetupListStyles.titleText}>{title.toUpperCase()}</Text>
          {event.sponsor && (
            <Text style={meetupListStyles.sponsorText}>{`(Sponsored by ${sponsor})`}</Text>
          )}
          <Text style={meetupListStyles.subTitleText}>{`${location}, 10min left`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { events = [] } = this.state;
    const selectedLocation = this.state.selectedLocation;
    let filteredEvents = [];
    if (selectedLocation === '- SHOW EVERYTHING -') {
      filteredEvents = events;
    } else {
      filteredEvents = events.filter(event => event.location === selectedLocation);
    }

    return (
      <View style={meetupListStyles.wrapper}>
        <View style={meetupListStyles.screenTitle_wrapper}>
          <Text style={meetupListStyles.screenTitle}>{'SCHEDULE'}</Text>
        </View>
        {this.renderLocationsList()}
        <FlatList
          data={filteredEvents}
          renderItem={({ item }) => this.renderEvent(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
