import React, {Component} from 'react';
import { connect } from 'react-redux';

import actions from '../../store/actions';
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
        loading: false,
        error: false
    };

    addIngredient = (type) => {
        this.props.addIngredient(type);
    };

    removeIngredient = (type) => {
        this.props.removeIngredient(type);
    };

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
        ingredients: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingName) => dispatch({type: actions.addIngredient, ingredientName: ingName}),
        removeIngredient: (ingName) => dispatch({type: actions.removeIngredient, ingredientName: ingName}),
        setIngredients: (ingredients) => dispatch({type: actions.setIngredients, ingredients: ingredients})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));