import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readSpeakers() {
  const query = `
    *[_type == 'person' && references('1dac660d-d163-4c92-9a3f-b96c2a3dd0c7') ] | order(title['nb'] asc){
      _id,
      title,
      foredrag,
      slug,
      employer,
      position,
      country,
      description,
      "image": image.asset->url
    }
  `;
  return dispatch => {
    sanity
      .fetch(query)
      .then(speakers => {
        dispatch({
          type: actionType.speakersReadFulfilled,
          payload: speakers,
        });
      })
      .catch(err => {
        dispatch({
          type: actionType.speakersReadRejected,
          error: `Error while readingSpekers. Status message: ${err.message}`,
        });
      });
  };
}
