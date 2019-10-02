import actionTypes from '../actions/actionTypes';
import { prices } from '../../containers/BurgerBuilder/constants';
import { updateObject } from '../../shared/utils';

const initialState = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0,
    },
    totalPrice: 4,
    error: false,
    purchased: false
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

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: action.error});
};

const postOrderFailed = (state, action) => {
    return updateObject(state, {error: action.error});
};

const postOrderSuccess = (state) => {
    return updateObject(state, {
        error: false,
        purchased: true,
    });
};

const purchaseStarted = (state) => {
    return updateObject(state, {purchased: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        case actionTypes.POST_ORDER_FAILED: return postOrderFailed(state, action);
        case actionTypes.POST_ORDER_SUCCESS: return postOrderSuccess(state, action);
        case actionTypes.PURCHASE_STARTED: return purchaseStarted(state, action);
        default: return state;
    }
};

export default reducer;