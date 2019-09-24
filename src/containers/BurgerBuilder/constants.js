const ingredientTypes = {
    breadTop: 'bread-top',
    breadBottom: 'bread-bottom',
    cheese: 'cheese',
    bacon: 'bacon',
    meat: 'meat',
    salad: 'salad',
    seeds1: 'seeds1',
    seeds2: 'seeds2'
};

const controls = [
    {label: 'Cheese', type: ingredientTypes.cheese},
    {label: 'Bacon', type: ingredientTypes.bacon},
    {label: 'Meat', type: ingredientTypes.meat},
    {label: 'Salad', type: ingredientTypes.salad},
];

const prices = {
    cheese: 0.8,
    bacon: 1.2,
    meat: 2.4,
    salad: 0.5
};

export { ingredientTypes, controls, prices };