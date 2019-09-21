/* eslint-disable react/no-array-index-key */
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
          name: 'My Program',
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
    this.menuItemPressed = this.menuItemPressed.bind(this);
  }

  menuItemPressed(screen, isCurrentScreen) {
    const { navigation } = this.props;
    return isCurrentScreen ? navigation.closeDrawer() : navigation.navigate(screen);
  }

  render() {
    const { listItems } = this.state;
    const { screenProps, navigation } = this.props;

    return (
      <View style={styles.main}>
        <View style={styles.navBar}>
          <Hamburger open {...this.props} />
        </View>
        <View style={styles.navWrapper}>
          <View>
            {Object.keys(listItems).map((listItem, i) => (
              <TouchableHighlight
                key={`menu-item-${listItems[listItem].name}-${i}`}
                underlayColor="transparent"
                onPress={() =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  this.menuItemPressed(
                    listItems[listItem].screen,
                    screenProps.activeItemKey === listItems[listItem].screen,
                  )
                }
              >
                <View style={styles.listItemWrapper}>
                  <Text
                    style={[
                      styles.listItemFont,
                      screenProps.activeItemKey === listItems[listItem].screen
                        ? styles.listItemSelected
                        : styles.listItem,
                    ]}
                  >
                    {convertUnicode('\u2192')}
                  </Text>
                  <Text
                    style={[
                      styles.listItemFont,
                      screenProps.activeItemKey === listItems[listItem].screen
                        ? styles.listItemSelected
                        : styles.listItem,
                    ]}
                  >
                    {listItems[listItem].name.toUpperCase()}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
          <View style={styles.logo}>
            <TouchableHighlight underlayColor="transparent" onPress={() => navigation.closeDrawer()}>
              <View>
                <Text style={[styles.logoFont, styles.logoFontColor]}>Y</Text>
                <Text style={[styles.logoFont, styles.logoFontColor]}>Oslo</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

MainMenu.propTypes = {
  navigation: propTypes.shape().isRequired,
  screenProps: propTypes.shape().isRequired,
};
