import sanity from '../../sanity';
import actionType from '../utils/redux';

export default function readSpeakers() {
  return dispatch => {
    //   const query = `
    //   *[_type == 'person' && references('1dac660d-d163-4c92-9a3f-b96c2a3dd0c7') ] | order(title['nb'] asc){
    //     _id,
    //     title,
    //     foredrag,
    //     slug,
    //     employer,
    //     position,
    //     country,
    //     description,
    //     "image": image.asset->url
    //   }
    //  `;
    //   sanity.fetch(query);
    dispatch({
      type: actionType.speakersReadFulfilled,
      payload: 'Speakers read...',
    });
  };
}
