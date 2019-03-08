import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import meetupListStyles from "../styles/meetupListStyles";

const eventsList = [
  { id: '001', subject:'Google Design Sprint', attendees:[{id:'123'}, {id:'143'}, {id:'323'}], location:'Bord 1', time:{ start:'14:30', end:'15:00' }, creator:'Bruce Wayne', attendeeLimit:0, description:'Vi snakker om GDS, kom kom!', tags:['Google Design Sprint', 'Metodikk', 'Design'] },
  { id: '002', subject:'React Native Talk', attendees:[{id:'125'}, {id:'145'}, {id:'523'}], location:'Bord 12', time:{ start:'11:45', end:'12:15' }, creator:'Peter Parker', attendeeLimit:15, description:'Kom og slå ann en prat om best practices innenfor React Native', tags:['Apps', 'React Native', 'Android', 'iOS'], sponsor:'DNB' },
  { id: '003', subject:'Øl med gutta', attendees:[{id:'185'}, {id:'145'}, {id:'583'}, {id:'185'}, {id:'145'}, {id:'583'}], location:'Feber', time:{ start:'19:00', end:'23:59' }, creator:'Nick Fury', attendeeLimit:0, description:'Fyllaaa!', tags:['Sosialt', 'Øl', 'Bar'] },
  { id: '004', subject:'Hva er Design?', attendees:[{id:'987'}, {id:'947'}, {id:'783'}, {id:'985'},], location:'Bord 4', time:{ start:'15:15', end:'15:45' }, creator:'Clark Kent', attendeeLimit:10, description:'Hva er Design? Hvorfor er Design?', tags:['Design', 'Filosofi'] },
  { id: '005', subject:'Trenger venner', attendees:[{id:'105'}], location:'Bord 6', time:{ start:'12:30', end:'13:00' }, creator:'Bruce Banner', attendeeLimit:0, description:'Søker noen jeg kan henge med under Y-konferansen...', tags:['Sosialt'] },
  { id: '006', subject:'Tabs vs Spaces', attendees:[{id:'105'}, {id:'245'}, {id:'503'}, {id:'285'}, {id:'185'}, {id:'145'}, {id:'583'}, {id:'185'}], location:'Bord 7', time:{ start:'14:00', end:'14:30' }, creator:'Tony Stark', attendeeLimit:15, description:'Kriiiiiig!', tags:['Koding', 'IT', 'Metodikk'] },
];



export default class MeetupList extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }

  renderEvent(event) {
    const {
      id = '',
      subject = '',
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
          <Text style={meetupListStyles.titleText}>{subject.toUpperCase()}</Text>
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
    return (
      <View style={meetupListStyles.wrapper}>
        <View style={meetupListStyles.screenTitle_wrapper}>
          <Text style={meetupListStyles.screenTitle}>{'PEOPLE ARE\nYAPPING ABOUT'}</Text>
        </View>
        <FlatList
          data={eventsList}
          renderItem={({item}) => this.renderEvent(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  }