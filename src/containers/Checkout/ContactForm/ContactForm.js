import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../hoc/ErrorHandler';
import Input from './Input/Input';
import axios from '../../../axios';
import {actionsAsync} from '../../../store/actions';

class ContactForm extends Component  {
    state = {
        loading: false,
        contactForm: {
            name: {
                inputType: 'text',
                config: {
                    type: 'text',
                    placeholder: 'Enter your name',
                    value: ''
                },
                displayName: 'Your name',
                isValid: ''
            },
            address: {
                inputType: 'text',
                config: {
                    type: 'text',
                    placeholder: 'Enter your address',
                    value: ''
                },
                displayName: 'Your address',
                isValid: ''
            },
            phone: {
                inputType: 'text',
                config: {
                    type: 'text',
                    placeholder: 'Enter your name',
                    value: ''
                },
                displayName: 'Phone number',
                isValid: ''
            },
            email: {
                inputType: 'text',
                config: {
                    type: 'email',
                    placeholder: 'Enter your email address',
                    value: ''
                },
                displayName: 'Email address',
                isValid: ''
            },
            deliveryMethod: {
                inputType: 'select',
                config: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ],
                value: 'fastest',
                displayName: 'Delivery Method',
                isValid: ''
            }
        }
    };

    onChangeHandler = (event, formKey) => {
        const contactForm = {...this.state.contactForm};
        const formElement = {...contactForm[formKey]};

        if (formElement.inputType === 'select') {
            formElement.value = event.target.value;
        } else {
            formElement.config.value = event.target.value;
        }

        contactForm[formKey] = formElement;

        this.setState({contactForm: contactForm});
    };

    onOrderedHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        this.props.postOrder(
            this.props.ingredients,
            this.props.price,
            {
                name: this.state.contactForm.name.config.value,
                address: this.state.contactForm.address.config.value,
                phoneNumber: this.state.contactForm.phone.config.value,
                email: this.state.contactForm.email.config.value,
                deliveryMethod: this.state.contactForm.deliveryMethod.value
            }
        );

    };

    render() {
        const form = this.state.contactForm;
        const inputFields = Object.keys(form).map(formKey => {
            return (
                <Input
                    inputType={form[formKey].inputType}
                    config={form[formKey].config}
                    value={form[formKey].value}
                    key={formKey}
                    displayName={form[formKey].displayName}
                    changed={(event) => this.onChangeHandler(event, formKey)}/>
            )
        });

        return (
            <React.Fragment>
                <h3>Please enter your contact data</h3>
                <form onSubmit={this.onOrderedHandler}>
                    {inputFields}
                    <Button type={'Success'}>ORDER</Button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postOrder: (ingredients, price, orderInfo) => dispatch(actionsAsync.postOrder(ingredients, price, orderInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(withRouter(ContactForm), axios));