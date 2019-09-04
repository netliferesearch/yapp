import React from 'react';
import { View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchSpeakers from '../../actions/SpeakersAction';
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
    this.props.fetchSpeakers();
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
  const { speakersRead } = state;
  return { speakers: speakersRead.speakers };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSpeakers,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeakersScreen);

SpeakersScreen.propTypes = {
  fetchSpeakers: propTypes.func.isRequired,
};
