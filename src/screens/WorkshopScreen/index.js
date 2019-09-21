import React from 'react';
import { ScrollView, View, BackHandler } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

// Others
import Header from '../../components/Header';
import Talk from '../../components/Speakers/Talk';
import { screen } from '../../styles/theme';

export class WorkshopScreen extends React.Component {
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
    const routeName = get(navigation, 'action.routeName', null);
    const backbutton = get(navigation, 'state.params.backbutton', null);

    if (!routeName && backbutton) {
      navigation.navigate('SpeakerScreen');
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={screen.wrapper}>
        <Header {...this.props} />
        <View style={screen.innerWrapper}>
          <Talk navigation={navigation} type="workshop" {...this.props} />
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
)(WorkshopScreen);

WorkshopScreen.defaultProps = {};

WorkshopScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
