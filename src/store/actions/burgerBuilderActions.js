import actionTypes from './actionTypes';
import axios from '../../axios';

export const addIngredient = (ingName) => {return {type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}};
export const removeIngredient = (ingName) => {return {type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}};

export const setIngredients = (ingredients) => {return {type: actionTypes.SET_INGREDIENTS, ingredients: ingredients}};
export const fetchIngredientsFailed = (error) => {return {type: actionTypes.FETCH_INGREDIENTS_FAILED, error: error}};
export const orderPostSuccess = () => {return {type: actionTypes.POST_ORDER_SUCCESS}};
export const orderPostFailed = () => {return {type: actionTypes.POST_ORDER_FAILED}};

export const startPurchase = () => {return {type: actionTypes.PURCHASE_STARTED}};
export const fetchIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed(error));
            });
    }
};
export const postOrder = (ingredients, price, orderInfo) => {
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
                dispatch(orderPostSuccess());
            })
            .catch((error) => {
                dispatch(orderPostFailed(error));
            });
    }
};