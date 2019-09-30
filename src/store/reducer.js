import actionTypes from './actionTypes';
import { prices } from '../containers/BurgerBuilder/constants';
import { updateObject } from './utils';

const initialState = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0,
    },
    totalPrice: 4
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    return updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + prices[action.ingredientName]
    });
};

const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    return updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - prices[action.ingredientName]
    });
};

const setIngredient = (state, action) => {
    const updatedIngredients = {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
    };
    return updateObject(state, {ingredients: updatedIngredients});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
        default:
            return state;
    }
};

export default reducer;