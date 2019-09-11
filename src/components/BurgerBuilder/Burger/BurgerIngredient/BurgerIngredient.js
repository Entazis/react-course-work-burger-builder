import React
    from 'react';
import classes from './Ingredient.module.css';
import  {ingredients}  from '../../constants';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ingredients.breadTop:
            ingredient = <div className={classes.BreadTop}>.</div> ;
            break;
        case ingredients.breadBottom:
            ingredient = <div className={classes.BreadBottom}>.</div> ;
            break;
        case ingredients.bacon:
            ingredient = <div className={classes.Bacon}>.</div> ;
            break;
        case ingredients.cheese:
            ingredient = <div className={classes.Cheese}>.</div> ;
            break;
        case ingredients.meat:
            ingredient = <div className={classes.Meat}>.</div> ;
            break;
        case ingredients.salad:
            ingredient = <div className={classes.Salad}>.</div> ;
            break;
        case ingredients.seeds1:
            ingredient = <div className={classes.Seeds1}>.</div> ;
            break;
        case ingredients.seeds2:
            ingredient = <div className={classes.Seeds2}>.</div> ;
            break;
        default:
            ingredient = null;
    }

    return (
        <div>
            {ingredient}
        </div>
    );
};

export default burgerIngredient;
