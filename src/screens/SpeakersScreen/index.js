import React from 'react';
import { View } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Others
import Header from '../../components/Header';
import Speakers from '../../components/Speakers';
import { screen } from '../../styles/theme';

export const SpeakersScreen = props => {
  return (
    <View style={screen.wrapper}>
      <Header {...props} />
      <View style={[screen.innerWrapper, { marginBottom: 100 }]}>
        <Speakers {...props} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const { speakerExtraRead, speakersRead } = state;
  return {
    speakers: speakersRead.speakers,
    speakerExtra: speakerExtraRead.speaker,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SpeakersScreen);

SpeakersScreen.defaultProps = {
  speakers: [],
};
SpeakersScreen.propTypes = {
  speakers: propTypes.array,
};
