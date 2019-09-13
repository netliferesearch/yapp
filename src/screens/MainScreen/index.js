import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Redux and props
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readProgram from '../../actions/ProgramAction';
import readSpeakers from '../../actions/SpeakersAction';
// Components
import Header from '../../components/Header';
import Hero from '../../components/Card/Hero';
import Calendar from '../../components/Program';
// Other
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Fetch speakers and program
    this.props.readProgram();
    this.props.readSpeakers();
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} infoText />
        <ScrollView>
          <Hero />
          <View style={styles.innerWrapper}>
            <View style={styles.intro}>
              <Text style={styles.introHead}>PROGRAM</Text>
              <Text style={styles.introArrow}>
                {`${convertUnicode('\u2193')} ${convertUnicode('\u2193')} ${convertUnicode('\u2193')}`}
              </Text>
            </View>
            <Calendar {...this.props} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { speakersRead, programRead } = state;
  return {
    speakers: speakersRead.speakers,
    program: programRead.program,
  };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readProgram,
      readSpeakers,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

MainScreen.defaultProps = {
  program: [],
  speakers: [],
};

MainScreen.propTypes = {
  program: propTypes.array,
  speakers: propTypes.array,
  readProgram: propTypes.func.isRequired,
  readSpeakers: propTypes.func.isRequired,
};
