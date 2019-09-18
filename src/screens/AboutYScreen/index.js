import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import readAboutArticle from '../../actions/AboutAction';
// Components
import Header from '../../components/Header';
import Card from '../../components/Card';
import SanityBlockContent from '../../components/SanityBlockContent';
// Others
import apiToValueChecker from '../../utils/apiToValue';
import styles from './styles';
import { screen } from '../../styles/theme';

export class AboutYScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.readAboutArticle();
  }

  // eslint-disable-next-line class-methods-use-this
  renderBody(body) {
    if (typeof body !== 'undefined') {
      return Object.keys(body).map(i => (
        <SanityBlockContent key={`about-blocks-${i}`} blocks={body[i].introArray.nb} />
      ));
    }
    return null;
  }

  render() {
    const { article } = this.props;
    const title = apiToValueChecker(article, 'title', 'nb') ? article.title.nb : null;
    const longTitle = apiToValueChecker(article, 'longTitle', 'nb') ? article.longTitle.nb : null;
    const lead = apiToValueChecker(article, 'lead', 'nb') ? article.lead.nb : null;
    const body = typeof article.body !== 'undefined' ? article.body : {};

    return (
      <View style={screen.wrapper}>
        <Header {...this.props} />
        <ScrollView style={screen.innerWrapper}>
          <View style={styles.blockContainer}>
            {longTitle && lead ? (
              <View>
                <Card
                  title={longTitle
                    .split(' ')
                    .join('\n')
                    .toUpperCase()}
                  text={lead}
                  options={{
                    align: 'left',
                    isTwoThirds: true,
                    switchFontSizes: true,
                    backgroundBlack: true,
                  }}
                />
              </View>
            ) : (
              title && (
                <Text style={[styles.titleFont, styles.titleFontProperties]}>
                  {title
                    .split(' ')
                    .join('\n')
                    .toUpperCase()}
                </Text>
              )
            )}
          </View>
          <View style={styles.blockContainer}>{Object.keys(body).map(() => this.renderBody(body))}</View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { aboutArticleRead } = state;
  return {
    article: aboutArticleRead.article,
  };
};

export default connect(
  mapStateToProps,
  { readAboutArticle },
)(AboutYScreen);

AboutYScreen.defaultProps = {
  article: {},
};

AboutYScreen.propTypes = {
  article: propTypes.shape(),
  readAboutArticle: propTypes.func.isRequired,
};
