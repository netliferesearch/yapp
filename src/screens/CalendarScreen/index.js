import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readProgram from '../../actions/ProgramAction';

// Others
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';
import styles from './styles';

export class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.readProgram();
  }

  render() {
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <Calendar />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { speakersRead } = state;
  return {
    speakers: speakersRead.speakers,
  };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readProgram,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarScreen);

CalendarScreen.defaultProps = {};

CalendarScreen.propTypes = {};
