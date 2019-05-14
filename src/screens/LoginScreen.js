import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logInUser } from '../actions/Session';

import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from '../styles/ScreenLoginStyles';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      pass: null,
      error: false,
      errorMessage: null,
    };
  }

  /**
   * Returned value is either a error message or true if user is trying to login.
   */
  static getDerivedStateFromProps(props) {
    switch (typeof props.userLoggedIn) {
      case 'string':
        return {
          errorMessage: props.userLoggedIn,
        };
      case 'boolean':
        return {
          errorMessage: null,
        };
      default:
        return null;
    }
  }

  login() {
    const { email, pass } = this.state;

    if (email && pass) {
      this.props.logInUser(email, pass);
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }

  signup() {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  }

  render() {
    const { error, errorMessage } = this.state;
    return (
      <View>
        <Header />
        <View style={styles.screenWrapper}>
          {(error || errorMessage) && (
            <View style={styles.errorWrapper}>
              {this.state.error && <Text style={styles.error}>Oops! You need to fill in all fields.</Text>}
              {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>
          )}
          <View style={styles.formWrapper}>
            <Input
              type="text"
              label="Email"
              inputValue={returnedInput => {
                this.setState({ email: returnedInput });
              }}
            />
            <Input
              type="password"
              label="Password"
              inputValue={returnedInput => {
                this.setState({ pass: returnedInput });
              }}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              type="primary"
              onPressCallback={() => {
                this.login();
              }}
              value="Login"
            />
            <Text style={styles.textOr}>Or</Text>
            <Button
              type="secondary"
              onPressCallback={() => {
                this.signup();
              }}
              value="Signup"
            />
          </View>
        </View>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: propTypes.object.isRequired,
  logInUser: propTypes.func.isRequired,
};

const mapStateToProps = ({ userLoggedIn }) => ({
  userLoggedIn: userLoggedIn.user,
});

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logInUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
