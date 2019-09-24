import React
    from 'react';
import classes from './Ingredient.module.css';
import  { ingredientTypes }  from '../../constants';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ingredientTypes.breadTop:
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
            break;
        case ingredientTypes.breadBottom:
            ingredient = <div className={classes.BreadBottom}></div> ;
            break;
        case ingredientTypes.bacon:
            ingredient = <div className={classes.Bacon}></div> ;
            break;
        case ingredientTypes.cheese:
            ingredient = <div className={classes.Cheese}></div> ;
            break;
        case ingredientTypes.meat:
            ingredient = <div className={classes.Meat}></div> ;
            break;
        case ingredientTypes.salad:
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
