import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readSpeakerWorkshop(uid = '') {
  const query = `
    *[_type == 'workshop' && references('${uid}') && references('1dac660d-d163-4c92-9a3f-b96c2a3dd0c7') ][0]{
      title,
      _type,
      description,
      slug
    }`;

  return dispatch => {
    if (uid === '') {
      dispatch({
        type: actionType.speakerReadWorkshopRejected,
        error: 'Error while reading speker workshop. Uid is empty.',
      });
    } else {
      sanity
        .fetch(query)
        .then(workshop => {
          dispatch({
            type: actionType.speakerReadWorkshopFulfilled,
            payload: workshop,
          });
        })
        .catch(err => {
          dispatch({
            type: actionType.speakerReadWorkshopRejected,
            error: `Error while reading speaker workshop. Status message: ${err.message}`,
          });
        });
    }
  };
}
