import React
    from 'react';
import classes
    from './Burger.module.css';
import BurgerIngredient
    from './BurgerIngredient/BurgerIngredient';
import  { ingredients }
    from '../constants';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />));

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={ingredients.breadTop}/>
            {transformedIngredients}
            <BurgerIngredient type={ingredients.breadBottom}/>
        </div>
    );
};

export default burger;
