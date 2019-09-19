import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from '../../axios';

import Burger from '../BurgerBuilder/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactForm from '../../components/UI/ContactForm/ContactForm';

class Checkout extends Component {
    state = {
        ingredients: {},
        loading: false
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
        console.log(this.props);
        this.props.history.push('/checkout/contact-data');
    };

    onOrderedHandler = async (event) => {
        event.preventDefault();
        this.setState({loading: true});

        await axios.post('/orders.json', {
            ingredients: {
                bacon: this.state.ingredients.bacon,
                cheese: this.state.ingredients.cheese,
                meat: this.state.ingredients.meat,
                salad: this.state.ingredients.bacon.salad
            },
            totalPrice: 4,
            orderInfo: {
                name: 'Steve',
                address: {
                    country: 'HU',
                    zipCode: 1096,
                    street: 'Wesseleny utca',
                    number: 121
                },
                phoneNumber: '+36302345688'
            }
        });

        this.setState({loading: false});
    };

    render() {
        console.log(this.props.location.pathname);
        return (
            <div>
                <h2>Here's your delicious burger, we hope you enjoy!</h2>
                <Burger ingredients={this.state.ingredients}/>
                <Button clicked={this.onCancelledHandler} type="Danger">Cancel</Button>
                <Button clicked={this.onContinueHandler} type="Success">Continue</Button>
                <Route path='/checkout/contact-data' render={() => <ContactForm clicked={this.onOrderedHandler}/>} />
            </div>
        );
    }
}

export default Checkout;