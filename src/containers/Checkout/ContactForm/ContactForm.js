import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../../axios';
import classes from './ContactForm.module.css';
import {actionsAsync} from '../../../store/actions';

import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../hoc/ErrorHandler';
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from '../../../shared/utils';

class ContactForm extends Component  {
    state = {
        loading: false,
        contactForm: {
            name: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                value: '',
                displayName: 'Your name',
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            zipCode: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Enter your ZIP code'
                },
                value: '',
                displayName: 'ZIP Code',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                isValid: false,
                isTouched: false
            },
            address: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Enter your address'
                },
                value: '',
                displayName: 'Your address',
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            phone: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                value: '',
                displayName: 'Phone number',
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false
            },
            email: {
                inputType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'Enter your email address'
                },
                value: '',
                displayName: 'Email address',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                isTouched: false
            },
            deliveryMethod: {
                inputType: 'select',
                config: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ],
                value: 'fastest',
                displayName: 'Delivery Method',
                validation: {},
                isValid: true,
                isTouched: false
            }
        },
        isFormValid: false
    };

    onChangeHandler = (event, formKey) => {
        const contactForm = {...this.state.contactForm};
        const formElement = {...contactForm[formKey]};

        formElement.value = event.target.value;
        formElement.isValid = checkValidity(formElement.value, formElement.validation);
        formElement.isTouched = true;
        contactForm[formKey] = formElement;

        let isFormValid = true;
        for (let inputIdentifier in formElement) {
            if ( formElement.hasOwnProperty(inputIdentifier) ) {
                isFormValid = formElement[inputIdentifier].valid && isFormValid;
            }
        }

        this.setState({contactForm: contactForm, formIsValid: isFormValid});
    };

    onOrderedHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        this.props.postOrder(
            this.props.ingredients,
            this.props.price,
            {
                name: this.state.contactForm.name.value,
                address: this.state.contactForm.address.value,
                phoneNumber: this.state.contactForm.phone.value,
                email: this.state.contactForm.email.value,
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
                    invalid={!form[formKey].isValid}
                    shouldValidate={form[formKey].validation}
                    touched={form[formKey].isTouched}
                    changed={(event) => this.onChangeHandler(event, formKey)}/>
            )
        });

        return (
            <div className={classes.ContactForm}>
                <h3>Please enter your contact data</h3>
                <form onSubmit={this.onOrderedHandler}>
                    {inputFields}
                    <Button type={'Success'}>ORDER</Button>
                </form>
            </div>
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
