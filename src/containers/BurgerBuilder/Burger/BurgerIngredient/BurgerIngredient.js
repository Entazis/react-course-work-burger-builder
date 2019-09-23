import React
    from 'react';
import classes from './Ingredient.module.css';
import  {ingredients}  from '../../constants';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ingredients.breadTop:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
            break;
        case ingredients.breadBottom:
            ingredient = <div className={classes.BreadBottom}></div> ;
            break;
        case ingredients.bacon:
            ingredient = <div className={classes.Bacon}></div> ;
            break;
        case ingredients.cheese:
            ingredient = <div className={classes.Cheese}></div> ;
            break;
        case ingredients.meat:
            ingredient = <div className={classes.Meat}></div> ;
            break;
        case ingredients.salad:
            ingredient = <div className={classes.Salad}></div> ;
            break;
        default:
            ingredient = null;
    }

    return (
        <React.Fragment>
            {ingredient}
        </React.Fragment>
    );
};

export default burgerIngredient;
