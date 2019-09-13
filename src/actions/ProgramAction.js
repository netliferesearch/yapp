import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readProgram() {
  const query = `*[_type == 'program' && title.nb == 'Y'] | order(title['nb'] asc) {
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
