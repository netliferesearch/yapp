import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import propTypes from 'prop-types';
import Hamburger from '../Header/Hamburger';
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        {
          name: 'Start',
          screen: 'MainScreen',
        },
        {
          name: 'Program',
          screen: 'ProgramScreen',
        },
        {
          name: 'My Programs',
          screen: 'MyProgramsScreen',
        },
        {
          name: 'Speakers',
          screen: 'SpeakersScreen',
        },
        {
          name: 'About Y',
          screen: 'AboutYScreen',
        },
        {
          name: 'Sponsors',
          screen: 'SponsorsScreen',
        },
        {
          name: 'Y Map',
          screen: 'YMapScreen',
        },
      ],
    };
  }

  render() {
    const { listItems } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.main}>
        <View style={styles.navBar}>
          <Hamburger open {...this.props} />
        </View>
        <View style={styles.navWrapper}>
          {Object.keys(listItems).map((listItem, i) => (
            <TouchableHighlight
              key={`menu-item-${listItems[listItem].name}-${i}`}
              underlayColor="transparent"
              onPress={() => navigation.navigate(listItems[listItem].screen)}
            >
              <View style={styles.listItemWrapper}>
                <Text style={[styles.listItemFont, styles.listItem]}>{convertUnicode('\u2192')}</Text>
                <Text style={[styles.listItemFont, styles.listItem]}>{listItems[listItem].name.toUpperCase()}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    );
  }
}

MainMenu.propTypes = {
  navigation: propTypes.shape().isRequired,
};
