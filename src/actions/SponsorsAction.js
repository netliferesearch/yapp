import { YellowBox } from 'react-native';
import actionType from '../utils/redux';
import sanity from '../../sanity';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function readSponsors() {
  const query = `
  *[_type == 'konferanse' && _id == "1dac660d-d163-4c92-9a3f-b96c2a3dd0c7"][0]{
    "superPartners": sponsors[level == "superpartner"]{_key,level,"sponsor": ref->{..., "image": imageWithColor.asset->url}},
    "mainPartners": sponsors[level == "mainpartner"]{_key,level,"sponsor": ref->{..., "image": imageWithColor.asset->url}},
    "partners": sponsors[level == "partner"]{_key,level,"sponsor": ref->{..., "image": imageWithColor.asset->url}},
  }`;
  return dispatch => {
    sanity
      .fetch(query)
      .then(sponsors => {
        dispatch({
          type: actionType.sponsorsReadFulfilled,
          payload: sponsors,
        });
      })
      .catch(err => {
        dispatch({
          type: actionType.sponsorsReadRejected,
          error: `Error while reading sponsors. Status message: ${err.message}`,
        });
      });
  };
}
