/* eslint-disable no-underscore-dangle */
// React, RN
import React from 'react';
import { FlatList } from 'react-native';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readSpeakerExtra from '../../actions/SpeakerAction';
// Others
import SpeakerList from './SpeakerList';
import styles from './styles';

export class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect(speakerData = null) {
    if (speakerData) {
      const { navigation } = this.props;
      this.props.readSpeakerExtra(speakerData.slug);
      navigation.navigate('SpeakerScreen', speakerData);
    }
  }

  render() {
    const { speakers, speakerExtra, navigation } = this.props;
    return (
      <React.Fragment>
        {speakers && (
          <FlatList
            style={styles.speakers}
            data={speakers}
            extraData={this.props}
            keyExtractor={speaker => `speaker-list${speaker._id}`}
            renderItem={speaker => (
              <SpeakerList
                speakers={speaker}
                navigation={navigation}
                speakerExtra={speakerExtra}
                onSelect={speakerData => this.onSelect(speakerData)}
              />
            )}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  const { speakerExtraRead } = state;
  return {
    speakerExtra: speakerExtraRead.speaker,
  };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readSpeakerExtra,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speakers);

Speakers.defaultProps = {
  speakers: null,
  speakerExtra: null,
  readSpeakerExtra: () => {},
};

Speakers.propTypes = {
  speakers: propTypes.any,
  speakerExtra: propTypes.any,
  readSpeakerExtra: propTypes.func,
  navigation: propTypes.any.isRequired,
};
