import actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    orders: [],
    error: false
};

const fetchOrdersFailed = (state, error) => {
    return updateObject(state, {error: error});
};

const setOrders = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        error: false
    });
};

const removeError = (state) => {
    return updateObject(state, {error: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_FAILED: return fetchOrdersFailed(state, action.error);
        case actionTypes.SET_ORDERS: return setOrders(state, action);
        case actionTypes.REMOVE_ERROR: return removeError(state, action);
        default: return state;
    }
};

export default reducer;