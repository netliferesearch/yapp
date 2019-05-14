import firebase from '../../firebaseConfig';
import actionType from '../utils/redux';
import errorMsg from '../utils/errorMsg';

const auth = firebase.auth();

const logInUser = (email = null, pass = null) => dispatch => {
  if (email && pass) {
    auth
      .signInWithEmailAndPassword(email.toLowerCase(), pass)
      .then(() => {
        dispatch({
          type: actionType.logInFulfilled,
          payload: true,
        });
      })
      .catch(error => {
        const errorCode = error.code;
        /**
         * Add custom error messages for:
         * auth/invalid-email
         * auth/user-not-found
         * auth/wrong-password
         */
        let errorMessage = '';
        switch (errorCode) {
          case 'auth/user-disabled':
            errorMessage = 'Your account is disabled.';
            break;
          default:
            errorMessage = 'Email or password is invalid.';
            break;
        }
        dispatch({
          type: actionType.logInRejected,
          error: errorMessage,
        });
      });
  } else {
    dispatch({
      type: actionType.logInRejected,
      error: errorMsg('Login', null, 'Email or pass is missing..'),
    });
  }
};

/**
 * @param {string} uid
 */
const logoutUser = (uid = null) => dispatch => {
  if (uid) {
    auth.signOut().then(() => {
      dispatch({
        type: actionType.logoutFulfilled,
        payload: true,
      });
    });
  } else {
    dispatch({
      type: actionType.logoutRejected,
      error: errorMsg('Logout', null, 'Could not find uid.'),
    });
  }
};

const checkUserSession = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionType.userSession,
        payload: user,
      });
    } else {
      dispatch({
        type: actionType.logoutRejected,
        error: errorMsg('Logout', null, 'Could not find uid.'),
      });
    }
  });
};

export { logInUser, logoutUser, checkUserSession };
