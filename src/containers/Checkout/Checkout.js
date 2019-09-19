import React, {Component} from 'react';
import Burger from '../BurgerBuilder/Burger/Burger';
import Button from '../../components/UI/Button/Button';

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
        this.props.history.push('/contact-data');
    };

    render() {
        return (
            <div>
                <h2>Here's your delicious burger, we hope you enjoy!</h2>
                <Burger ingredients={this.state.ingredients}/>
                <Button clicked={this.onCancelledHandler} type="Danger">Cancel</Button>
                <Button clicked={this.onContinueHandler} type="Success">Continue</Button>
            </div>
        );
    }
}

export default Checkout;