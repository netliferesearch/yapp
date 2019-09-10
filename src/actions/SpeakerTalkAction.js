import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readSpeakerTalk(uid = '') {
  const query = `
    *[_type == 'foredrag' && references('${uid}') && references('1dac660d-d163-4c92-9a3f-b96c2a3dd0c7') ][0]{
      title,
      _type,
      description,
      slug
    }`;

  return dispatch => {
    if (uid === '') {
      dispatch({
        type: actionType.speakerReadTalkRejected,
        error: 'Error while reading speker talk. Uid is empty.',
      });
    } else {
      sanity
        .fetch(query)
        .then(talk => {
          dispatch({
            type: actionType.speakerReadTalkFulfilled,
            payload: talk,
          });
        })
        .catch(err => {
          dispatch({
            type: actionType.speakerReadTalkRejected,
            error: `Error while reading speaker talk. Status message: ${err.message}`,
          });
        });
    }
  };
}
