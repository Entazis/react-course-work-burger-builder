import actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    user: null
};

const saveUser = (state, action) => {
    return updateObject(state, {user: action.user});
};

const removeUser = (state) => {
    return updateObject(state, {user: null});
};

const authFailed = (state) => {
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        case actionTypes.AUTH_SAVE_USER: return saveUser(state, action);
        case actionTypes.AUTH_REMOVE_USER: return removeUser(state, action);
        default: return state;
    }
};

export default reducer;