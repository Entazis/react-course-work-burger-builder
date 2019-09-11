import React
  from 'react';
import classes from './Ingredient.module.css';
import ingredientConstants from './constants';

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ingredientConstants.breadTop:
      ingredient = <div className={classes.BreadTop}>.</div> ;
      break;
    case ingredientConstants.breadBottom:
      ingredient = <div className={classes.BreadBottom}>.</div> ;
      break;
    case ingredientConstants.bacon:
      ingredient = <div className={classes.Bacon}>.</div> ;
      break;
    case ingredientConstants.cheese:
      ingredient = <div className={classes.Cheese}>.</div> ;
      break;
    case ingredientConstants.meat:
      ingredient = <div className={classes.Meat}>.</div> ;
      break;
    case ingredientConstants.salad:
      ingredient = <div className={classes.Salad}>.</div> ;
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
