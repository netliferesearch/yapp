import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import firebase from '../../firebaseConfig';
import { fetchUnregisteredCardById, signupUser } from '../actions/SignupUser';

import Logo from '../images/logo';
import styles from '../styles/SignupScreenStyles';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: '',
      nickname: '',
      email: '',
      password: '',
      signupPage: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.card === false && state.signupPage === 1) {
      return {
        signupPage: 2,
      };
    }
    return null;
  }

  componentDidMount() {
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
  }

  componentDidUpdate() {
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
  }

  onPressCardId() {
    const { cardId } = this.state;

    if (cardId !== '') {
      this.props.fetchUnregisteredCardById(cardId);
    }
  }

  onPressAccount() {
    const { cardId, nickname, email, password } = this.state;

    if (nickname !== '' && email !== '' && password !== '') {
      this.props.signupUser(cardId, nickname, email, password);
    }
  }

  render() {
    const { cardId, nickname, email, password, signupPage } = this.state;

    return (
      <View style={styles.screenWrapper}>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>
        <Text>What's in it for me text.</Text>
        {signupPage === 2 ? (
          <View>
            <Text>Fill in personal info and create account.</Text>
            <Text>Nickname</Text>
            <TextInput style={styles.input} onChangeText={nick => this.setState({ nickname: nick })} value={nickname} />
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={mail => this.setState({ email: mail })} value={email} />
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={pass => this.setState({ password: pass })}
              value={this.state.password}
            />
            {nickname !== '' && email !== '' && password !== '' && (
              <TouchableOpacity style={styles.button} onPress={this.onPressAccount}>
                <Text style={styles.buttonText}>Create account</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View>
            <Text>Input id located on your Y-badge.</Text>
            <TextInput style={styles.input} onChangeText={id => this.setState({ cardId: id })} value={cardId} />
            {cardId !== '' && (
              <TouchableOpacity style={styles.button} onPress={this.onPressCardId}>
                <Text style={styles.buttonText}>Submit ID</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
}
const mapStateToProps = ({ card, userSignedUp }) => ({
  card: card.id,
  userSignedUp: userSignedUp.user,
});

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUnregisteredCardById,
      signupUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen);

SignupScreen.propTypes = {
  navigation: propTypes.object.isRequired,
  fetchUnregisteredCardById: propTypes.func.isRequired,
  signupUser: propTypes.func.isRequired,
};
