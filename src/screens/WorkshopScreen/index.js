import React from 'react';
import { ScrollView, View, BackHandler } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import Talk from '../../components/Speakers/Talk';
import styles from './styles';

export default class WorkshopScreen extends React.Component {
  componentDidMount() {
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      // eslint-disable-next-line implicit-arrow-linebreak
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid(payload)),
    );
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-unused-expressions
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }

  onBackButtonPressAndroid(payload) {
    const { navigation } = this.props;

    if (typeof payload.action.routeName === 'undefined') {
      navigation.navigate('SpeakerScreen');
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <Talk navigation={navigation} type="workshop" />
        </View>
      </ScrollView>
    );
  }
}

WorkshopScreen.defaultProps = {};

WorkshopScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
