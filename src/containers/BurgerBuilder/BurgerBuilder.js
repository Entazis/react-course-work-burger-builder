import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axios';

import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import OrderSummary from './Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/ErrorHandler';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    };

    addIngredient = (type) => this.props.addIngredient(type);
    removeIngredient = (type) => this.props.removeIngredient(type);

    isPurchaseAvailable = () => {
        const ingredientCount = Object.values(this.props.ingredients)
            .reduce((sum, count) => sum + count, 0);
        return ingredientCount > 0;
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

    continueToLogin = async () => {
        this.props.history.push('/auth');
        this.setState({purchasing: false});
    };

    componentDidMount() {
        this.props.fetchIngredients();
        this.props.startPurchase();
    }

    render() {
        let buildControls = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;
        let orderSummary = null;

        if (!this.props.error) {
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
                        totalPrice={this.props.price}
                        cancel={this.togglePurchaseHandler}
                        continue={this.continuePurchase}
                    />);
            }
            buildControls = (
                <BuildControls
                    addedIngredient={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    ingredients={this.props.ingredients}
                    isPurchaseEnabled={this.isPurchaseAvailable()}
                    ordered={this.purchaseHandler}
                    totalPrice={this.props.price}
                    user={this.props.user}
                    redirect={this.continueToLogin}
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
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        purchased: state.burgerBuilder.purchased,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingName) => dispatch(actions.addIngredient(ingName)),
        removeIngredient: (ingName) => dispatch(actions.removeIngredient(ingName)),
        setIngredients: (ingredients) => dispatch(actions.setIngredients(ingredients)),
        fetchIngredients: () => dispatch(actions.fetchIngredients()),
        startPurchase: () => dispatch(actions.startPurchase())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));