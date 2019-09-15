import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateMyPrograms, readMyPrograms } from '../../actions/MyProgramsAction';

// Others
import Header from '../../components/Header';
import styles from './styles';

export class MyProgramsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPrograms: [
        {
          title: 'THURSDAY',
          tracks: [],
        },
        {
          title: 'FRIDAY',
          tracks: [],
        },
      ],
    };
  }

  componentDidMount() {
    this.props.readMyPrograms();
  }

  addToDay(day) {
    const { myPrograms } = this.state;
    Object.keys(myPrograms).map(i => {
      if (myPrograms[i].title === day) {
        myPrograms[i].tracks.push({
          track: day,
        });
      }
    });
    this.props.updateMyPrograms(myPrograms);
    this.setState(myPrograms);
  }

  render() {
    const { programs } = this.props;

    console.log('MY PROGRAMS', programs);
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <TouchableHighlight underlayColor="transparent" onPress={() => this.addToDay('THURSDAY')}>
              <Text>Click to add program to Thursday</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            <TouchableHighlight underlayColor="transparent" onPress={() => this.addToDay('FRIDAY')}>
              <Text>Click to add program to Thursday</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            <Text>My programs</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { myProgramsRead } = state;
  return {
    programs: myProgramsRead.programs,
  };
};

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readMyPrograms,
      updateMyPrograms,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProgramsScreen);

MyProgramsScreen.defaultProps = {};

MyProgramsScreen.propTypes = {
  readMyPrograms: propTypes.func.isRequired,
  updateMyPrograms: propTypes.func.isRequired,
};
