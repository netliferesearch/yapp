import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readProgram() {
  const query = `*[_type == 'program' && title.nb == 'Y'] | order(title['nb'] asc)`;
  return dispatch => {
    sanity
      .fetch(query)
      .then(program => {
        console.log('PROGRAM', program);
        dispatch({
          type: actionType.programReadFulfilled,
          payload: program,
        });
      })
      .catch(err => {
        console.log('PROGRAM ERROR', err);
        dispatch({
          type: actionType.programReadRejected,
          error: `Error while readingSpeker. Status message: ${err.message}`,
        });
      });
  };
}
