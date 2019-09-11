import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 2,
            meat: 2,
            salad: 1
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