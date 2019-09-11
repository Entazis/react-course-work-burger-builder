import React
  from 'react';
import classes from './Ingredient.module.css';
import ingredientConstants from './constants';

const burgerIngredient = (props) => {
  let ingredientClass = null;

  switch (props.type) {
    case ingredientConstants.breadTop:
      ingredientClass = classes.BreadTop;
      break;
    case ingredientConstants.breadBottom:
      ingredientClass = classes.BreadBottom;
      break;
    case ingredientConstants.bacon:
      ingredientClass = classes.Bacon;
      break;
    case ingredientConstants.cheese:
      ingredientClass = classes.Cheese;
      break;
    case ingredientConstants.meat:
      ingredientClass = classes.Meat;
      break;
    case ingredientConstants.salad:
      ingredientClass = classes.Salad;
      break;
    default:
      ingredientClass = null;
  }

  return (
      <div className={ingredientClass}>
        .
      </div>
  );
};

export default burgerIngredient;
