import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import { prices } from './constants';
import axios from '../../axios';

import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import OrderSummary from './Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/ErrorHandler';

class BurgerBuilder extends Component {
    state = {
        isPurchaseEnabled: true,
        purchasing: false,
        totalPrice: 4,
        loading: false,
        error: false
    };

    addIngredient = (type) => {
        this.props.addIngredient(type);

        //TODO: this should run after the state update
        this.updateTotalPrice(this.props.ingredients);
        this.setPurchaseAvailability(this.props.ingredients);
    };

    removeIngredient = (type) => {
        this.props.removeIngredient(type);

        //TODO: this should run after the state update
        this.updateTotalPrice(this.props.ingredients);
        this.setPurchaseAvailability(this.props.ingredients);
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
        this.props.history.push('/checkout');
        this.setState({purchasing: false});
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(ingredients => this.props.setIngredients(ingredients.data))
            .catch(error => {this.setState({error: error})});
    }

    render() {
        let buildControls = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;
        let orderSummary = null;

        if (!this.state.error) {
            burger = (
                <Burger
                    ingredients={this.props.ingredients}
                />
            );
            if (this.state.loading) {
                orderSummary = <Spinner/>;
            } else {
                orderSummary = (
                    <OrderSummary
                        ingredients={this.props.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancel={this.togglePurchaseHandler}
                        continue={this.continuePurchase}
                    />);
            }
            buildControls = (
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    ingredients={this.props.ingredients}
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredient) => dispatch({type: actions.addIngredient, ingredient: ingredient}),
        removeIngredient: (ingredient) => dispatch({type: actions.removeIngredient, ingredient: ingredient}),
        setIngredients: (ingredients) => dispatch({type: actions.setIngredients, ingredients: ingredients})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));