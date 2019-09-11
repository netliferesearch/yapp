import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import Hero from '../../components/Card/Hero';
import Calendar from '../../components/Calendar';
import styles from './styles';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} infoText />
        <Hero />
        <View style={styles.innerWrapper}>
          <Calendar />
        </View>
      </View>
    );
  }
}

MainScreen.propTypes = {};
