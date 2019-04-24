import firebase from '../../firebaseConfig';
import actionType from '../utils/redux';
import errorMsg from '../utils/errorMsg';

const auth = firebase.auth();
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

export { logoutUser, checkUserSession };
