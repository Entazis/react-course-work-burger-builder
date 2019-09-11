import React
  from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import ingredientConstants
  from './BurgerIngredient/constants';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />));

  return (
      <div className={classes.Burger}>
        <BurgerIngredient type={ingredientConstants.breadTop}/>
        {transformedIngredients}
        <BurgerIngredient type={ingredientConstants.breadBottom}/>
      </div>
  );
};

export default burger;
