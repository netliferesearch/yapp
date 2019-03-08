import React from "react";
import { View, Text, Button } from "react-native";
import Header from '../components/Header/header';
import theme from '../styles/theme';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <Header title="YAPP!" />,
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.yummyPink, color: '#fff'}}>
          <Button
            title="Go to the Meetup List"
            onPress={() => this.props.navigation.navigate('MeetupList')}
          />
          <Button
            title="Go to the Meetup Create"
            onPress={() => this.props.navigation.navigate('MeetupCreate')}
          />
          <Button
            title="Go to the Meetup Event"
            onPress={() => this.props.navigation.navigate('MeetupEvent')}
          />
        </View>
      );
    }
  }
const styles = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#F3C1C1', 
    color: '#F80303'
}
  