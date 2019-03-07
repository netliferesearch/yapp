import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchLeaderboard} from '../actions/Leaderboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLeaderboard();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
	return {
		leaderBoard: state.leaderBoardFetched,
	};
}

// Make actions accessable from props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchLeaderboard,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

