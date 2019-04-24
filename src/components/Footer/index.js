import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
// import styles from '../../styles/HeaderStyles';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.navigation);

    return (
      <View>
        <Text>Menu1</Text>
        <Text>Menu2</Text>
        <Text>Menu3</Text>
      </View>
    );
  }
}

Footer.defaultProps = {};

Footer.propTypes = {
  navigation: propTypes.object.isRequired,
};
