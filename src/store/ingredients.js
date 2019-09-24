import actions from './actions';

const initialState = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0,
    }
};

const reducer = (state = initialState, action) => {
    const updatedIngredients = {...state.ingredients};

    switch (action.type) {
        case actions.addIngredient:
            switch (action.ingredient) {
                case 'bacon':
                    updatedIngredients.bacon = updatedIngredients.bacon + 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'cheese':
                    updatedIngredients.cheese = updatedIngredients.cheese + 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'meat':
                    updatedIngredients.meat = updatedIngredients.meat + 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'salad':
                    updatedIngredients.salad = updatedIngredients.salad + 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                default:
                    return state;
            }
        case actions.removeIngredient:
            switch (action.ingredient) {
                case 'bacon':
                    updatedIngredients.bacon = updatedIngredients.bacon - 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'cheese':
                    updatedIngredients.cheese = updatedIngredients.cheese - 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'meat':
                    updatedIngredients.meat = updatedIngredients.meat - 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                case 'salad':
                    updatedIngredients.salad = updatedIngredients.salad - 1;
                    return {
                        ...state,
                        ingredients: updatedIngredients
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default reducer;