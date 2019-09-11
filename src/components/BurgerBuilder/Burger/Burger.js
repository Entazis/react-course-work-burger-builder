import React
  from 'react';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  //TODO: transform props.ingredients to array to loop and return <ingredient> jsx
  return (
      <div>
        <Ingredient type="BreadTop"/>
      </div>
  );
};

export default burger;
