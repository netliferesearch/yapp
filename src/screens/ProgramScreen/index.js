import React from 'react';
import { ScrollView, View } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readProgram from '../../actions/ProgramAction';

// Others
import Header from '../../components/Header';
import Program from '../../components/Program';
import styles from './styles';

export class ProgramScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.readProgram();
  }

  render() {
    const { program } = this.props;
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <Program />
          </View>
        </View>
      </ScrollView>
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
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgramScreen);

ProgramScreen.defaultProps = {
  program: {},
};

ProgramScreen.propTypes = {
  program: propTypes.oneOfType([propTypes.shape(), propTypes.array]),
  readProgram: propTypes.func.isRequired,
};
