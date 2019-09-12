import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readSpeakerExtra(slug = '') {
  const query = `
  *[slug['nb'].current == '${slug}' && references('1dac660d-d163-4c92-9a3f-b96c2a3dd0c7')][0]{
    "id": _id,
    title,
    meta {
      title,
      description,
      "image": image.asset->url
    },
    "image": image.asset->url,
    position,
    employer,
    country,
    about,
    scene[]->{
      title
    },
    conferenceRef[]->{
      title,
      slug,
      "id": _id
    },
  }
  `;
  return dispatch => {
    if (slug === '') {
      dispatch({
        type: actionType.speakerReadRejected,
        error: 'Error while readingSpeker. Slug is empty.',
      });
    } else {
      sanity
        .fetch(query)
        .then(speaker => {
          dispatch({
            type: actionType.speakerReadFulfilled,
            payload: speaker,
          });
        })
        .catch(err => {
          dispatch({
            type: actionType.speakerReadRejected,
            error: `Error while reading speaker. Status message: ${err.message}`,
          });
        });
    }
  };
}
