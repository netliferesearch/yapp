import React from 'react';
import { Text } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
import propTypes from 'prop-types';

import { theme, font } from '../../styles/theme';

const BlockRenderer = props => {
  let markup = null;
  switch (props.node.style) {
    case 'h2':
      markup = (
        <Text style={[font.mdBold, { marginTop: theme.margins.md, marginBottom: theme.margins.sm }]}>
          {props.children}
        </Text>
      );
      break;
    case 'normal':
    default:
      markup = (
        <Text
          style={[
            font.smRegular,
            { marginTop: theme.margins.md, marginBottom: theme.margins.xs, lineHeight: theme.margins.lg },
          ]}
        >
          {props.children}
        </Text>
      );
      break;
  }
  return markup;
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
