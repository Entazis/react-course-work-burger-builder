import actionTypes from './actionTypes';
import axios from '../axios';

export const actions = {
    addIngredient: (ingName) => {return {type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}},
    removeIngredient: (ingName) => {return {type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}},
    setIngredients: (ingredients) => {return {type: actionTypes.SET_INGREDIENTS, ingredients: ingredients}},
    fetchIngredientsFailed: (error) => {return {type: actionTypes.FETCH_INGREDIENTS_FAILED, error: error}}
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
    }
};