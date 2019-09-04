import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const Card = props => {
  const { width, title, text } = props;
  return <View style={styles.card}></View>;
};

Card.propTypes = {};
