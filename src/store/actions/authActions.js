import actionTypes from './actionTypes';
import firebase from '../../firebase';

export const authSuccess = () => {return {type: actionTypes.AUTH_SUCCESS}};
export const authFailed = (error) => {return {type: actionTypes.AUTH_FAILED, error: error}};
export const authSaveUser = (user) => {return {type: actionTypes.AUTH_SAVE_USER, user: user}};
export const authRemoveUser = () => {return {type: actionTypes.AUTH_REMOVE_USER}};

export const authSignUp = (email, password) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                dispatch(authSuccess());
                dispatch(authSaveUser(response.user));
            })
            .catch(error => {
                dispatch(authFailed(error));
            });
    };
};

export const authLogIn = (email, password) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                dispatch(authSuccess());
                dispatch(authSaveUser(response.user));
            })
            .catch(error => {
                dispatch(authFailed(error));
            });
    };
};

export const authLogOut = () => {
    return dispatch => {
        firebase.auth().signOut().then(() => {
            dispatch(authSuccess());
            dispatch(authRemoveUser());
        }).catch(error => {
            dispatch(authFailed(error));
        });
    }
};