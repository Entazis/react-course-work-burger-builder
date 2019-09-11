import React
  from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import ingredientConstants
  from './BurgerIngredient/constants';

const burger = (props) => {
  //TODO: transform props.ingredients to array to loop and return <ingredient> jsx
  return (
      <div>
        <BurgerIngredient type={ingredientConstants.breadTop}/>

        <BurgerIngredient type={ingredientConstants.breadBottom}/>
      </div>
  );
};

export default burger;
