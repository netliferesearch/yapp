import * as firebase from 'firebase';
import uuid from 'uuid/v4';

var config = {
  apiKey: 'AIzaSyBvVYdjcVSyJ3_HdA54XWTjZGqmKbmj8tw',
  authDomain: 'yapp-70773.firebaseapp.com',
  databaseURL: 'https://yapp-70773.firebaseio.com',
  projectId: 'yapp-70773',
  storageBucket: 'yapp-70773.appspot.com',
  messagingSenderId: '128914629238',
};
firebase.initializeApp(config);
export default {
  postEvent: function(eventData) {
    const eventId = uuid();
    console.log('firebase eventdata', eventData);
    firebase
      .database()
      .ref('events/' + eventId)
      .set(eventData);
    return eventId;
  },
  getName: function(name) {
    console.log('GET NAME ', name);
    return firebase
      .database()
      .ref('users/' + name)
      .once('value')
      .then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        console.log(snapshot.val());
        return username;
      });
  },
  getAll: function() {
    console.log('GET ALL');
    return firebase
      .database()
      .ref('users/')
      .once('value')
      .then(function(snapshot) {
        // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // console.log(snapshot.val());
        return snapshot.val();
      });
  },
};
