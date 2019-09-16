import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

const Star = props => {
  const { checked } = props;

  return (
    <Svg width="35" height="35" viewBox="0 0 35 35">
      <Path
        d="M17.5,1.5l5,10.22,11,2.09L25.61,22,28.93,33.5,17.5,26.12,6.07,33.5,9.39,22,1.5,13.81l11-2.09Z"
        stroke="#000000"
        fill={checked ? '#000000' : 'transparent'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Star;

Star.defaultProps = {
  checked: false,
};

Star.propTypes = {
  checked: propTypes.bool,
};
