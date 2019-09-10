import React from 'react';
import { View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readSpeakers from '../../actions/SpeakersAction';
// Others
import Header from '../../components/Header';
import Speakers from '../../components/Speakers';
import styles from './styles';

export class SpeakersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.readSpeakers();
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <Text style={[styles.headingFont, styles.heading]}>SPEAKERS</Text>
          <Speakers {...this.props} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { speakerExtraRead, speakersRead } = state;
  return {
    speakers: speakersRead.speakers,
    speakerExtra: speakerExtraRead.speaker,
  };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readSpeakers,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeakersScreen);

SpeakersScreen.propTypes = {
  readSpeakers: propTypes.func.isRequired,
};
