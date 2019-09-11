import React from 'react';
import { ScrollView, View } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import Talk from '../../components/Speakers/Talk';
import styles from './styles';

export default class TalkScreen extends React.Component {
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

TalkScreen.defaultProps = {};

TalkScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
