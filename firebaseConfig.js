import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBvVYdjcVSyJ3_HdA54XWTjZGqmKbmj8tw",
  authDomain: "yapp-70773.firebaseapp.com",
  databaseURL: "https://yapp-70773.firebaseio.com/",
  storageBucket: "gs://yapp-70773.appspot.com"
};

firebase.initializeApp(config);

export default firebase;
