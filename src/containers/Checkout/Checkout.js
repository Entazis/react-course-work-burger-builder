import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from '../../axios';

import Burger from '../BurgerBuilder/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactForm from '../../components/UI/ContactForm/ContactForm';
import withErrorHandler from '../../hoc/ErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Checkout extends Component {
    state = {
        ingredients: {}
    };

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search);
        this.setState({
            ingredients: {
                bacon: +urlParams.get('bacon'),
                cheese: +urlParams.get('cheese'),
                meat: +urlParams.get('meat'),
                salad: +urlParams.get('salad')
            }
        });
    }

    onCancelledHandler = () => {
        this.props.history.goBack();
    };

    onContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    };

    render() {
        let form = null;
        if (this.state.loading) {
            form = <Spinner />;
        } else {
            form = <ContactForm ingredients={this.state.ingredients}/>;

        }
        return (
            <div>
                <h2>Here's your delicious burger, we hope you enjoy!</h2>
                <Burger ingredients={this.state.ingredients}/>
                <Button clicked={this.onCancelledHandler} type="Danger">Cancel</Button>
                <Button clicked={this.onContinueHandler} type="Success">Continue</Button>
                <Route path='/checkout/contact-data' render={() => form} />
            </div>
        );
    }
}

export default withErrorHandler(Checkout, axios);