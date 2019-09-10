import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import styles from './styles';

export default class WorkshopScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <Text>Workshop</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

WorkshopScreen.defaultProps = {};

WorkshopScreen.propTypes = {};
