import actionTypes from './actionTypes';
import axios from '../../axios';

export const setOrders = (orders) => {return {type: actionTypes.SET_ORDERS, orders: orders}};
export const fetchOrdersFailed = (error) => {return {type: actionTypes.FETCH_ORDERS_FAILED, error: error}};

export const removeError = () => {return {type: actionTypes.REMOVE_ERROR}};
export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
            .then(response => {
                dispatch(setOrders(response.data));
            })
            .catch(error => {
                dispatch(fetchOrdersFailed(error));
            });
    }
};
