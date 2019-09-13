import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import { prices } from './constants';
import Modal
    from '../UI/Modal/modal';
import OrderSummary
    from './Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 2,
            meat: 2,
            salad: 1
        },
        isPurchaseEnabled: true,
        purchasing: false,
        totalPrice: 4
    };

    addIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        this.setState({ingredients});
        this.updateTotalPrice(ingredients);
        this.setPurchaseAvailability(ingredients);
    };

    removeIngredient = (type) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] <= 0)
            return;
        ingredients[type] = ingredients[type] - 1;
        this.setState({ingredients});
        this.updateTotalPrice(ingredients);
        this.setPurchaseAvailability(ingredients);
    };

    updateTotalPrice = (ingredients) => {
        const updatedPrice = Object.keys(ingredients)
            .map(igKey => ingredients[igKey] * prices[igKey])
            .reduce((sum, price) => sum + price, 0);
        this.setState({totalPrice: updatedPrice});
    };

    setPurchaseAvailability = (ingredients) => {
        const count = Object.values(ingredients)
            .reduce((cnt, price) => cnt + price, 0);
        this.setState({isPurchaseEnabled: count > 0});
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    togglePurchaseHandler = () => {
        this.setState((prevState) => ({
            purchasing: !prevState.purchasing
        }));
    };

    continuePurchase = () => {
        alert('You\'ve successfully ordered the burger');
    };

    render() {
        return (
            <div>
                <Modal show={this.state.purchasing} close={this.togglePurchaseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancel={this.togglePurchaseHandler}
                        continue={this.continuePurchase}
                    />
                </Modal>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    ingredients={this.state.ingredients}
                    isPurchaseEnabled={this.state.isPurchaseEnabled}
                    ordered={this.purchaseHandler}
                    totalPrice={this.state.totalPrice}
                />
            </div>
        );
    }
}

export default BurgerBuilder;