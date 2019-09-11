import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }
  };

  render() {
    return (
        <div>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls/>
        </div>
    );
  }
}

export default BurgerBuilder;