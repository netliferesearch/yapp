/**
 * Signup using our test badges:
 * Firebase uid (User session is a uid when logged in with email and password.)
 * and cardId will always be linked in firebase database after sigup.
 *
 * Create new user?
 * Make sure that either cardId a44e81e or d80d673 is in firebase node unregisteredCards.
 * If not, it might be activated by a user.
 * Users uid and email can be found at Firebase Authentication section.
 * Copy UID and search for it in the users node in firebase users database.
 * Signup will fetch unregistered cards for cardId. If found then state signupPage will be 2
 * and only then a user can be linked to that cardId.
 */
import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import firebase from '../../firebaseConfig';
import { fetchUnregisteredCardById, signupUser } from '../actions/SignupUser';

import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

import styles from '../styles/ScreenSignupStyles';

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
    this.onPressCardId = this.onPressCardId.bind(this);
    this.onPressAccount = this.onPressAccount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.card === false && state.signupPage === 1) {
      return {
        signupPage: 2,
      };
    }
    return null;
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
      <View>
        <Header />
        <View style={styles.screenWrapper}>
          <Text>What's in it for me text.</Text>
          {signupPage === 2 ? (
            <View>
              {
                // Todo: Return error if fields are empty, password is weak or email does/doesn't exist.
              }
              <Text>Fill in personal info and create account.</Text>
              <Input type="text" label="Nickname" inputValue={nick => this.setState({ nickname: nick })} />
              <Input type="text" label="Email" inputValue={mail => this.setState({ email: mail })} />
              <Input type="password" label="Password" inputValue={pass => this.setState({ password: pass })} />
              {nickname !== '' && email !== '' && password !== '' && (
                <Button type="primary" value="Create account" onPressCallback={this.onPressAccount} />
              )}
            </View>
          ) : (
            <View>
              {
                // Todo: Return error if card is not found.
              }
              <Input
                type="text"
                label="Input id located on your Y-badge."
                inputValue={id => this.setState({ cardId: id })}
              />
              {cardId !== '' && <Button type="primary" value="Submit ID" onPressCallback={this.onPressCardId} />}
            </View>
          )}
        </View>
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
