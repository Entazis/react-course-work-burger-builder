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
    const isEmpty = a => Array.isArray(a) && a.every(isEmpty);

    //FIXME: fix seeds css
    return (
        <div className={classes.Burger}>
            {/*<BurgerIngredient type={ingredients.seeds1}/>*/}
            {/*<BurgerIngredient type={ingredients.seeds2}/>*/}
            <BurgerIngredient type={ingredients.breadTop}/>
            {(!isEmpty(transformedIngredients)) ? transformedIngredients : "Please start adding ingredients!"}
            <BurgerIngredient type={ingredients.breadBottom}/>
        </div>
    );
};

export default burger;
