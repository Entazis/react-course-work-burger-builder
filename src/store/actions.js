import actionTypes from './actionTypes';
import axios from '../axios';

export const actions = {
    addIngredient: (ingName) => {return {type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}},
    removeIngredient: (ingName) => {return {type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}},
    setIngredients: (ingredients) => {return {type: actionTypes.SET_INGREDIENTS, ingredients: ingredients}},
    fetchIngredientsFailed: (error) => {return {type: actionTypes.FETCH_INGREDIENTS_FAILED, error: error}},
    orderPostSuccess: () => {return {type: actionTypes.POST_ORDER_SUCCESS}},
    orderPostFailed: () => {return {type: actionTypes.POST_ORDER_FAILED}},
    setOrders: (orders) => {return {type: actionTypes.SET_ORDERS, orders: orders}},
    fetchOrdersFailed: (error) => {return {type: actionTypes.FETCH_ORDERS_FAILED, error: error}},
    removeError: () => {return {type: actionTypes.REMOVE_ERROR}},
    startPurchase: () => {return {type: actionTypes.PURCHASE_STARTED}}
};

export const actionsAsync = {
    fetchIngredients: () => {
        return dispatch => {
            axios.get('/ingredients.json')
                .then(response => {
                    dispatch(actions.setIngredients(response.data));
                })
                .catch(error => {
                    dispatch(actions.fetchIngredientsFailed(error));
                });
        }
    },
    postOrder: (ingredients, price, orderInfo) => {
        return dispatch => {
            axios.post('/orders.json', {
                ingredients: {
                    bacon: ingredients.bacon,
                    cheese: ingredients.cheese,
                    meat: ingredients.meat,
                    salad: ingredients.salad
                },
                totalPrice: price,
                orderInfo: orderInfo})
            .then(() => {
                dispatch(actions.orderPostSuccess());
            })
            .catch((error) => {
                dispatch(actions.orderPostFailed(error));
            });
        }
    },
    fetchOrders: () => {
        return dispatch => {
            axios.get('/orders.json')
                .then(response => {
                    dispatch(actions.setOrders(response.data));
                })
                .catch(error => {
                    dispatch(actions.fetchOrdersFailed(error));
                });
        }
    },
};