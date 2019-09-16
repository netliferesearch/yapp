import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Header from '../../components/Header';
import Program from '../../components/Program';
// Others
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';

export class ProgramScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} />
        <ScrollView>
          <View style={styles.screenInnerWrapper}>
            <View style={styles.intro}>
              <Text style={styles.introHead}>PROGRAM</Text>
              <Text style={styles.introArrow}>
                {`${convertUnicode('\u2193')} ${convertUnicode('\u2193')} ${convertUnicode('\u2193')}`}
              </Text>
            </View>
            <Program {...this.props} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { speakersRead, programRead, speakerWorkshopRead, speakerTalkRead, speakerExtraRead } = state;
  return {
    speakers: speakersRead.speakers,
    program: programRead.program,
    speakerExtra: speakerExtraRead.speaker,
    speakerWorkshop: speakerWorkshopRead.workshop,
    speakerTalk: speakerTalkRead.talk,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProgramScreen);

ProgramScreen.defaultProps = {
  program: {},
};

ProgramScreen.propTypes = {
  program: propTypes.oneOfType([propTypes.shape(), propTypes.array]),
};
