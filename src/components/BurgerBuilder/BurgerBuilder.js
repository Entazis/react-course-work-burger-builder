import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import { prices } from './constants';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 2,
            meat: 2,
            salad: 1
        },
        isPurchaseEnabled: true,
        totalPrice: 4
    };

    addIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients});
        this.updateTotalPrice(ingredients);
    };

    removeIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] <= 0)
            return;
        ingredients[type] = ingredients[type] - 1;
        this.setState({ingredients});
        this.updateTotalPrice(ingredients);
    };

    updateTotalPrice = (ingredients) => {
        const updatedPrice = Object.keys(ingredients)
            .map(igKey => ingredients[igKey] * prices[igKey])
            .reduce((sum, price) => sum + price, 0);
        this.setState({totalPrice: updatedPrice});
    };

    render() {
        return (
            <div>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    ingredients={this.state.ingredients}
                    isPurchaesEnabled={this.state.isPurchaseEnabled}
                    totalPrice={this.state.totalPrice}
                />
            </div>
        );
    }
}

export default BurgerBuilder;