import React, {Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import { prices } from './constants';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from './Burger/OrderSummary/OrderSummary';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/ErrorHandler';

class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        isPurchaseEnabled: true,
        purchasing: false,
        totalPrice: 4,
        loading: false,
        error: false
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

    continuePurchase = async () => {
        const ingredients = this.state.ingredients;
        const query = [];
        for (const ingredientName in ingredients) {
            if (ingredients.hasOwnProperty(ingredientName)) {
                query.push(encodeURIComponent(ingredientName) + "=" + encodeURIComponent(ingredients[ingredientName]));
            }
        }

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + query.join("&")
        });

        this.setState({purchasing: false});
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(ingredients => this.setState({ingredients: ingredients.data }))
            .catch(error => {this.setState({error: error})});
    }

    render() {
        let buildControls = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;
        let orderSummary = null;

        if (!this.state.error) {
            burger = (
                <Burger
                    ingredients={this.state.ingredients}
                />
            );
            if (this.state.loading) {
                orderSummary = <Spinner/>;
            } else {
                orderSummary = (
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancel={this.togglePurchaseHandler}
                        continue={this.continuePurchase}
                    />);
            }
            buildControls = (
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    ingredients={this.state.ingredients}
                    isPurchaseEnabled={this.state.isPurchaseEnabled}
                    ordered={this.purchaseHandler}
                    totalPrice={this.state.totalPrice}
                />)
        }

        return (
            <div>
                <Modal
                    show={this.state.purchasing}
                    close={this.togglePurchaseHandler}
                    loading={this.state.loading}>
                    {orderSummary}
                </Modal>
                {burger}
                {buildControls}
            </div>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);