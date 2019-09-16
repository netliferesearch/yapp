import React from 'react';
import { ScrollView, View, BackHandler } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Others
import Header from '../../components/Header';
import Talk from '../../components/Speakers/Talk';
import apiToValueChecker from '../../utils/apiToValue';
import styles from './styles';

export class TalkScreen extends React.Component {
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

  onBackButtonPressAndroid() {
    const { navigation } = this.props;
    const routeName = apiToValueChecker(navigation, 'action', 'routeName');
    const backbutton = apiToValueChecker(navigation, 'state', 'params', 'backbutton')
      ? navigation.state.params.backbutton
      : null;

    if (!routeName && backbutton) {
      navigation.navigate('SpeakerScreen');
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <Talk navigation={navigation} type="talk" {...this.props} />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { speakerExtraRead, speakerWorkshopRead, speakerTalkRead } = state;
  return {
    speakerExtra: speakerExtraRead.speaker,
    speakerWorkshop: speakerWorkshopRead.workshop,
    speakerTalk: speakerTalkRead.talk,
  };
};

export default connect(
  mapStateToProps,
  null,
)(TalkScreen);

TalkScreen.defaultProps = {};

TalkScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
