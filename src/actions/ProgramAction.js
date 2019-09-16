import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readProgram() {
  const query = `*[_type == 'program' && _id == 'c5da52e7-cac7-4059-871f-73b1b8bcf2a8'] | order(title['nb'] asc) {
    _id,
    programArray[] {
      _key,
      postTitle,
      "slot": slotRef[]{
        _key,
        title,
        startTime,
        endTime,
        linkToTalk,
        "session": ref->{
          id,
          slug,
          _type,
          title,
          foredragsholdere[]->{
            _id,
            title,
            foredrag,
            employer,
            slug,
            _type,
            "image": image.asset->url
          },
          "scene": sceneRef->{
            id,
            title
          },
          "track": trackRef->{
            id,
            title
          }
        },
        _type,
        description,
      }
    }
  }`;

  return dispatch => {
    sanity
      .fetch(query)
      .then(program => {
        dispatch({
          type: actionType.programReadFulfilled,
          payload: program,
        });
      })
      .catch(err => {
        dispatch({
          type: actionType.programReadRejected,
          error: `Error while readingSpeker. Status message: ${err.message}`,
        });
      });
  };
}
