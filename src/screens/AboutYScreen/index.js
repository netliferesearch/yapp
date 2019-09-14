import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readAboutArticle from '../../actions/AboutAction';
// Components
import Header from '../../components/Header';
// Others
import styles from './styles';

export class AboutYScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.readAboutArticle();
  }

  render() {
    const { article } = this.props;
    console.log('IN RENDER', article);
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} />
        <ScrollView style={styles.screenInnerWrapper}>
          <View style={styles.partnersContainer}>
            <Text style={[styles.sponsorFont, styles.sponsorFontProperties]}>ABOUT Y</Text>
          </View>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readAboutArticle,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutYScreen);

AboutYScreen.defaultProps = {
  article: {},
};

AboutYScreen.propTypes = {
  article: propTypes.shape(),
  readAboutArticle: propTypes.func.isRequired,
};
