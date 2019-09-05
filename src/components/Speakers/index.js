// React, RN
import React from 'react';
import { View, Text } from 'react-native';
// Others
import styles from './styles';

export default class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { speakers } = this.props;

    return (
      <View style={styles.speakers}>
        {typeof speakers !== 'undefined' && (
          <React.Fragment>
            {console.log('SPEAKERS', speakers)}
            <Text>List with speakers</Text>
          </React.Fragment>
        )}
      </View>
    );
  }
}
