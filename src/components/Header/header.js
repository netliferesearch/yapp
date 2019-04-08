import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import Logo from '../../images/logo';
import styles from '../../styles/HeaderStyles';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      customTitle: '',
    };
  }

  componentDidMount() {
    const { sidebar } = this.props;

    this.setState({
      showSidebar: sidebar,
    });
  }

  render() {
    const { showSidebar, customTitle } = this.state;

    return (
      <React.Fragment>
        {showSidebar ? (
          <View style={styles.sidebar}>
            <Logo sidebar={showSidebar} />
          </View>
        ) : (
          <View style={styles.default}>
            {customTitle === '' ? (
              <View>
                <Logo />
              </View>
            ) : (
              <Text>{customTitle}</Text>
            )}
          </View>
        )}
      </React.Fragment>
    );
  }
}

Header.defaultProps = {
  sidebar: false,
};

Header.propTypes = {
  sidebar: propTypes.bool,
};
