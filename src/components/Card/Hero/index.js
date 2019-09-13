import React from 'react';
import { View, Text } from 'react-native';
import RotateElement from '../../RotateElement';
import styles from './styles';
import convertUnicode from '../../../utils/unicodeChars';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animateY: true,
      animateArrow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animateY: false, animateArrow: true });
    }, 2500);
  }

  render() {
    const { animateY, animateArrow } = this.state;

    return (
      <View style={styles.card}>
        <Text style={styles.yFont}>Y</Text>
        {/*animateY && (
          <RotateElement from="0deg" to="-90deg" duration={500} delay={2000}>
            <Text style={styles.yFont}>Y</Text>
          </RotateElement>
        )}
        {animateArrow && (
          <RotateElement from="0deg" to="-90deg" duration={500}>
            <Text style={styles.arrowFont}>{convertUnicode('\u2190')}</Text>
          </RotateElement>
        )*/}
      </View>
    );
  }
}

Hero.propTypes = {};
