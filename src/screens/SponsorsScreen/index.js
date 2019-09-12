import React from 'react';
import { ScrollView, View } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import Talk from '../../components/Speakers/Talk';
import styles from './styles';

export default class SponsorsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <Talk navigation={navigation} type="talk" />
        </View>
      </ScrollView>
    );
  }
}

SponsorsScreen.defaultProps = {};

SponsorsScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
