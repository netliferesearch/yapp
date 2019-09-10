import React from 'react';
import { Text } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
import propTypes from 'prop-types';

import { theme, font } from '../../styles/theme';

const BlockRenderer = props => {
  return <Text style={[font.smRegular, { marginBottom: theme.margins.md }]}>{props.children}</Text>;
};
const SanityBlockContent = props => {
  const { blocks } = props;
  return <BlockContent blocks={blocks} serializers={{ types: { block: BlockRenderer } }} />;
};

export default SanityBlockContent;
BlockRenderer.propTypes = {
  children: propTypes.array.isRequired,
};
SanityBlockContent.propTypes = {
  blocks: propTypes.array.isRequired,
};
