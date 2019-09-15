import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readAboutArticle() {
  const query = `*[_type == 'artikkel' && _id == 'ukHPr0TFp3EQ500zWU5UGm'][0]{
    _id,
    title,
    lead,
    longTitle,
    slug,
    body[],
  }`;
  return dispatch => {
    sanity
      .fetch(query)
      .then(article => {
        dispatch({
          type: actionType.aboutArticleReadFulfilled,
          payload: article,
        });
      })
      .catch(err => {
        dispatch({
          type: actionType.aboutArticleReadRejected,
          error: `Error while reading about y article. Status message: ${err.message}`,
        });
      });
  };
}
