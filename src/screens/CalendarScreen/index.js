import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import styles from './styles';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <Text>CalendarScreen</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

CalendarScreen.defaultProps = {};

CalendarScreen.propTypes = {};
