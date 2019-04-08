import firebase from '../../firebaseConfig';
import actionType from '../utils/redux';
import errorMsg from '../utils/errorMsg';

const database = firebase.database();
/**
 * @param {string} cardId
 */
export const fetchUnregisteredCardById = (cardId = null) => {
  return dispatch => {
    if (cardId) {
      database.ref(`unregisteredCards/${cardId}`).on('value', snap => {
        if (snap.exists) {
          dispatch({
            type: actionType.cardIdFetched,
            payload: snap.val(),
          });
        } else {
          dispatch({
            type: actionType.cardIdRejected,
            error: errorMsg('signup', null, 'Could not find card id.'),
          });
        }
      });
    } else {
      dispatch({
        type: actionType.cardIdRejected,
        error: errorMsg('signup', null, 'Could not find card id.'),
      });
    }
  };
};
/**
 * @param {string} cardId
 * @param {string} nickname
 * @param {string} email
 * @param {string} password
 */
export const signupUser = (cardId = null, nickname = null, email = null, password = null) => {
  return dispatch => {
    if (cardId && email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          const { errorCode, errorMessage } = error;

          dispatch({
            type: actionType.doSignupRejected,
            error: errorMsg('signup', errorCode, errorMessage),
          });
        })
        .then(() => {
          // Hopefully we now have a user.
          // Add card id and nickname to the current users profile.
          const user = firebase.auth().currentUser;

          if (user !== null) {
            user
              .updateProfile({
                nickname: nickname ? nickname : 'Anonymous user',
                cardId: cardId,
              })
              .then(() => {
                // Update successful.
                // Add user to database and remove cardId from unregistered cards.
                database
                  .ref(`unregisteredCards/${cardId}`)
                  .remove()
                  .then(() => {
                    // Add user to users node with cardId as key, uid and nickname.
                    database
                      .ref(`users/${cardId}`)
                      .set({
                        uid: user.uid,
                        nickname: nickname,
                      })
                      .then(() => {
                        dispatch({
                          type: actionType.doSignupFulfilled,
                          payload: true,
                        });
                      })
                      .catch(() => {
                        dispatch({
                          type: actionType.doSignupRejected,
                          error: errorMsg(
                            'signup',
                            null,
                            'User is created but we could not update users node with userdata.',
                          ),
                        });
                      });
                  });
              })
              .catch(() => {
                dispatch({
                  type: actionType.doSignupRejected,
                  error: errorMsg('signup', null, 'Could not update user profile.'),
                });
              });
          } else {
            dispatch({
              type: actionType.doSignupRejected,
              error: errorMsg('signup', null, 'Could not sign in user.'),
            });
          }
        });
    } else {
      dispatch({
        type: actionType.doSignupRejected,
        error: errorMsg('signup', null, 'Missing card ID.'),
      });
    }
  };
};
