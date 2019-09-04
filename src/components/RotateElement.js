import React from 'react';
import { Animated } from 'react-native';
import propTypes from 'prop-types';

export default class RotateElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeInAnim: new Animated.Value(0),
      fadeOutAnim: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { duration, fadeIn, fadeOut, delay } = this.props;
    const startAnimation = () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration,
      }).start(() => {
        if (fadeOut) {
          this.fadeOut();
        } else if (fadeIn) {
          this.fadeIn();
        } else {
          this.props.animationDoneCallback();
        }
      });
    };

    if (delay) {
      setTimeout(() => {
        startAnimation();
      }, delay);
    } else {
      startAnimation();
    }
  }

  fadeIn() {
    this.setState({ fadeInAnim: new Animated.Value(1) }, () => {
      Animated.timing(this.state.fadeInAnim, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        this.props.animationDoneCallback();
      });
    });
  }

  fadeOut() {
    this.setState({ fadeOutAnim: new Animated.Value(1) }, () => {
      Animated.timing(this.state.fadeOutAnim, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        this.props.animationDoneCallback();
      });
    });
  }

  render() {
    const { from, to, children, fadeIn, fadeOut } = this.props;
    const { fadeInAnim, fadeOutAnim } = this.state;

    const interpolationRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [from, to],
    });

    const animatedStyle = {
      transform: [{ rotate: interpolationRotation }],
      // eslint-disable-next-line no-nested-ternary
      opacity: fadeIn ? fadeInAnim : fadeOut ? fadeOutAnim : 1,
    };
    return <Animated.View style={animatedStyle}>{children}</Animated.View>;
  }
}

RotateElement.defaultProps = {
  from: '0deg',
  to: '0deg',
  duration: 500,
  animationDoneCallback: () => {},
  fadeOut: false,
  fadeIn: false,
  delay: false,
};

RotateElement.propTypes = {
  children: propTypes.any.isRequired,
  from: propTypes.string,
  to: propTypes.string,
  duration: propTypes.number,
  animationDoneCallback: propTypes.func,
  fadeOut: propTypes.bool,
  fadeIn: propTypes.bool,
  delay: propTypes.any,
};
