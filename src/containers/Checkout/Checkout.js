import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

import Burger from '../BurgerBuilder/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactForm from './ContactForm/ContactForm';

import { connect } from 'react-redux';

class Checkout extends Component {
    onCancelledHandler = () => {
        this.props.history.goBack();
    };

    onContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    };

    render() {
        let redirect = (this.props.ingredients.bacon === 0 && this.props.ingredients.cheese === 0 &&
            this.props.ingredients.meat === 0 && this.props.ingredients.salad === 0) ? <Redirect to="/"/>  : null;
        redirect = (redirect || this.props.purchased) ? <Redirect to="/"/>  : null;
        return (
            <div>
                <p>{redirect}</p>
                <h2>Here's your delicious burger, we hope you enjoy!</h2>
                <Burger ingredients={this.props.ingredients}/>
                <Button clicked={this.onCancelledHandler} type="Danger">Cancel</Button>
                <Button clicked={this.onContinueHandler} type="Success">Continue</Button>
                <Route path='/checkout/contact-data' component={ContactForm} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.burgerBuilder.purchased
    }
};

export default connect(mapStateToProps)(Checkout);