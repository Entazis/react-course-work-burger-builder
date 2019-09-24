import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from '../../axios';

import Burger from '../BurgerBuilder/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactForm from '../../components/UI/ContactForm/ContactForm';
import withErrorHandler from '../../hoc/ErrorHandler';

import { connect } from 'react-redux';

class Checkout extends Component {
    onCancelledHandler = () => {
        this.props.history.goBack();
    };

    onContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    };

    render() {
        const form = <ContactForm ingredients={this.props.ingredients} error={this.props.error}/>;
        return (
            <div>
                <h2>Here's your delicious burger, we hope you enjoy!</h2>
                <Burger ingredients={this.props.ingredients}/>
                <Button clicked={this.onCancelledHandler} type="Danger">Cancel</Button>
                <Button clicked={this.onContinueHandler} type="Success">Continue</Button>
                <Route path='/checkout/contact-data' render={() => form} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
};

export default connect(mapStateToProps)(withErrorHandler(Checkout, axios));