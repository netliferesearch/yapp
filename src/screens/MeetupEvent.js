import React from 'react';
import { View, Text, Button } from 'react-native';

const event = {
  id: '1',
  subject: 'Beste CMS for kommuner?',
  attendees: [141, 618, 891],
  location: 'RedZone Sopp',
  time: { start: '14:30', end: '14:45' },
  creator: '918',
  attendeeLimit: 8,
  description:
    'Har du erfaringer med CMS? Hvordan funker det for dere? Vi skal bytte ut vår gamle løsning, og vil gjerne snakke med andre som skal eller har gjort det samme',
  tags: ['cms', 'kommune'],
};

// Get data from Firebase

// const attendeeInfo = event.attendees.map(attendeeId =>  firebaseHelper.getInfo(attendeeId))

const freeSpaces = attendeeLimit - attendees.length;
const freeSpacesText = freeSpaces > 0 ? `${freeSpaces} av ${attendeeLimit} plasser ledig` : 'Beklager, fullt';

handleAttendClick = () => {
  alert('Grattis, du er påmeldt');
};

class H1 extends React.Component {
  render() {
    return <Text style={{ fontWeight: 'bold', marginBottom: 30, fontSize: 30 }}>{this.props.children}</Text>;
  }
}

class BoldText extends React.Component {
  render() {
    return <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{this.props.children}</Text>;
  }
}

export default class MeetupEvent extends React.Component {
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
  }

  render() {
    console.log(this.params);
    const {
      event = {}
    } = this.params;

    const {
      subject = '',
      location = '',
      time = {},
      description = {},
      tags = [],
      attendees = [],
      attendeeLimit = 0,
    } = event;

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', color: 'black' }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Button title="← Go back to the event list" onPress={() => this.props.navigation.navigate('MeetupList')} />
        </View>

        <View>
          <H1>{subject}</H1>

          <Text style={{ fontSize: 20 }}>
            Onsdag, {time.start} - {time.end}
          </Text>

          <BoldText>Sone</BoldText>
          <Text>{location} (se kart)</Text>

          <BoldText>Plasser</BoldText>
          <Text>{freeSpacesText}</Text>

          <BoldText>Ansvarlig</BoldText>
          <Text>Geir Gudvangen (Vågøy kommune)</Text>

          <BoldText>Deltagere</BoldText>
          <Text>
            Kent-Andre Simonsen (Vågøy kommune){'\n'}Mia Vassøy (Epinova){'\n'}Trude Traust (Oslo kommune)
          </Text>

          <BoldText>Beskrivelse</BoldText>
          <Text>{description}</Text>
        </View>

        <Button title="Jeg vil delta" onPress={() => handleAttendClick(userId)} />
      </View>
    );
  }
}
