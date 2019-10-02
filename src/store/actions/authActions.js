import actionTypes from './actionTypes';
import firebase from '../../firebase';

export const authSuccess = () => {return {type: actionTypes.AUTH_SUCCESS}};
export const authFailed = () => {return {type: actionTypes.AUTH_FAILED}};

export const authSignUp = (email, password) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                dispatch(authSuccess());
            })
            .catch(error => {
                dispatch(authFailed());
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
                dispatch(authFailed());
            });
    };
};