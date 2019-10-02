import actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
    user: null,
    loading: false,
    error: null,
    redirectPath: '/'
};

const saveUser = (state, action) => {
    return updateObject(state, {user: action.user});
};

const removeUser = (state) => {
    return updateObject(state, {user: null});
};

const authStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    });
};

const authSuccess = (state) => {
    return updateObject(state, {
        loading: false,
        error: null
    });
};

const authFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        case actionTypes.AUTH_SAVE_USER: return saveUser(state, action);
        case actionTypes.AUTH_REMOVE_USER: return removeUser(state, action);
        default: return state;
    }
};

export default reducer;