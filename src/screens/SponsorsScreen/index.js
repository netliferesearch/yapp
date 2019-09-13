import React from 'react';
import { View, Text, ScrollView } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readSponsors from '../../actions/SponsorsAction';
// Others
import Header from '../../components/Header';
import Sponsors from '../../components/Sponsors';
import styles from './styles';

export class SponsorsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.readSponsors();
  }

  render() {
    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.content}>
            <Sponsors />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readSponsors,
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(SponsorsScreen);

SponsorsScreen.propTypes = {
  readSponsors: propTypes.func.isRequired,
};
