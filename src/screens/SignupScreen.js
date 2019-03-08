import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from "react-native";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import firebase from '../../firebaseConfig';
import { fetchUnregisteredCardById, signupUser } from '../actions/SignupUser';

import Logo from '../images/logo';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.yummyPink,
  },
  // TODO: remove input styles and create separate input component.
  input: {
    width: 200,
    height: 40,
    padding: 5,
    borderBottomColor: theme.colors.yellingRed,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    backgroundColor: theme.colors.yetiWhite,
  },
  logoWrapper: {
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  },
  buttonText: {
    color: theme.colors.yetiWhite,
  }
});

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
    if(props.card === false && state.signupPage === 1) {
      return {
        signupPage: 2
      }
    }
    return null;
  }

  componentDidMount() {
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        navigation.navigate('Home');
      }
    });
  }

  componentDidUpdate() {
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        navigation.navigate('Home');
      }
    });
  }

  onPressCardId = () => {
    const { cardId } = this.state;

    if(cardId !== '') {
      this.props.fetchUnregisteredCardById(cardId);
    }
  }

  onPressAccount = () => {
    const { cardId, nickname, email, password } = this.state;

    if(nickname !== '' && email !== '' && password !== '') {
      this.props.signupUser(cardId, nickname, email, password);
    }
  }
  
  render() {
    const { cardId, nickname, email, password, signupPage } = this.state;

    return (
      <View style={styles.screenWrapper}>
        <View style={styles.logoWrapper}>
          <Logo/>
        </View>
        <Text>What's in it for me text.</Text>
        {
          signupPage === 2 ? (
            <View>
              <Text>Fill in personal info and create account.</Text>
              <Text>Nickname</Text>
              <TextInput
                style={styles.input}
                onChangeText={(nickname) => this.setState({nickname})}
                value={this.state.nickname}
              />
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
              {
                nickname !== '' && email !== '' && password !== '' && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressAccount}
                  >
                    <Text style={styles.buttonText}>Create account</Text>
                  </TouchableOpacity>
                )
              }
            </View>
          ) : (
            <View>
            <Text>Input id located on your Y-badge.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(cardId) => this.setState({cardId})}
              value={this.state.cardId}
            />
            {
              cardId !== '' && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onPressCardId}
                >
                  <Text style={styles.buttonText}>Submit ID</Text>
                </TouchableOpacity>
              )
            }
          </View>
          )
        }
      </View>
    );
  }
}
const mapStateToProps = ({ card, userSignedUp }) => {
	return {
    card: card.id,
    userSignedUp: userSignedUp.user,
	};
}

// Make actions accessable from props
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    fetchUnregisteredCardById,
    signupUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
