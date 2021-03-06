import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import  { ingredientTypes } from '../constants';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />));
    const isEmpty = a => Array.isArray(a) && a.every(isEmpty);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={ingredientTypes.breadTop}/>
            {(!isEmpty(transformedIngredients)) ? transformedIngredients : "Please start adding ingredients!"}
            <BurgerIngredient type={ingredientTypes.breadBottom}/>
        </div>
    );
};

export default burger;
