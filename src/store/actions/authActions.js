import actionTypes from './actionTypes';
import firebase from '../../firebase';

export const authSuccess = () => {return {type: actionTypes.AUTH_SUCCESS}};
export const authFailed = (error) => {return {type: actionTypes.AUTH_FAILED, error: error}};

export const authSignUp = (email, password) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                dispatch(authSuccess());
            })
            .catch(error => {
                dispatch(authFailed(error));
            });
    };
};

export const authLogIn = (email, password) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                dispatch(authSuccess());
            })
            .catch(error => {
                dispatch(authFailed(error));
            });
    };
};