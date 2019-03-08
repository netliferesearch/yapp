import * as firebase from "firebase";
import uuid from "uuid/v4";

var config = {
  apiKey: "AIzaSyBvVYdjcVSyJ3_HdA54XWTjZGqmKbmj8tw",
  authDomain: "yapp-70773.firebaseapp.com",
  databaseURL: "https://yapp-70773.firebaseio.com",
  projectId: "yapp-70773",
  storageBucket: "yapp-70773.appspot.com",
  messagingSenderId: "128914629238"
};
firebase.initializeApp(config);
export default {
  postEvent: function(eventData) {
    const eventId = uuid();
    console.log("firebase eventdata", eventData);
    firebase
      .database()
      .ref("events/" + eventId)
      .set(eventData);
    return eventId;
  },
  getEvent: function(name) {
    console.log("GET NAME ", name);
    return firebase
      .database()
      .ref("events/" + name)
      .once("value")
      .then(function(snapshot) {
        var username =
          (snapshot.val() && snapshot.val().username) || "Anonymous";
        console.log(snapshot.val());
        return username;
      });
  },
  getAllEvents: function() {
    console.log("GET ALL Events");
    return firebase
      .database()
      .ref("events/")
      .once("value")
      .then(function(snapshot) {
        // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // console.log(snapshot.val());
        return snapshot.val();
      });
  },
  getAllLocations: function() {
    console.log("GET ALL Locations");
    return firebase
      .database()
      .ref("locations/")
      .once("value")
      .then(function(snapshot) {
        // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // console.log(snapshot.val());
        return snapshot.val();
      });
  }
};
