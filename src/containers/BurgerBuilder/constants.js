const ingredients = {
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
    {label: 'Cheese', type: ingredients.cheese},
    {label: 'Bacon', type: ingredients.bacon},
    {label: 'Meat', type: ingredients.meat},
    {label: 'Salad', type: ingredients.salad},
];

const prices = {
    cheese: 0.8,
    bacon: 1.2,
    meat: 2.4,
    salad: 0.5
};

export { ingredients, controls, prices };