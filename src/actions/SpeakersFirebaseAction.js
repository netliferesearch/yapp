import * as firebase from 'firebase';
import { YellowBox } from 'react-native';
import actionType from '../utils/redux';

YellowBox.ignoreWarnings(['Setting a timer']);

const config = {
  apiKey: 'AIzaSyBvVYdjcVSyJ3_HdA54XWTjZGqmKbmj8tw',
  authDomain: 'yapp-70773.firebaseapp.com',
  databaseURL: 'https://yapp-70773.firebaseio.com/',
  storageBucket: 'gs://yapp-70773.appspot.com',
};

firebase.initializeApp(config);
const db = firebase.database();
export default function readSpeakers() {
  return dispatch => {
    db.ref('/speakers')
      .once('value')
      .then(snapshot => {
        const speakers = snapshot.val();
        if (speakers) {
          dispatch({
            type: actionType.speakersReadFulfilled,
            payload: speakers,
          });
        } else {
          dispatch({
            type: actionType.speakersReadRejected,
            error: 'Error while readingSpekers.',
          });
        }
      });
  };
}
