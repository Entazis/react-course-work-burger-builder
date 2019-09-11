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

    addIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients});
    };

    removeIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] <= 0)
            return;
        ingredients[type] = ingredients[type] - 1;
        this.setState({ingredients});
    };

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                />
            </div>
        );
    }
}

export default BurgerBuilder;