import React, { Component }
    from 'react';
import Button from '../Button/Button';
import Input
    from './Input/Input';

class ContactForm extends Component  {
    state = {
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
                displayName: 'Delivery Method',
                isValid: ''
            }
        }
    };

    render() {
        const form = this.state.contactForm;
        const inputFields = Object.keys(form).map(formKey => {
            return (
                <Input
                    inputType={form[formKey].inputType}
                    config={form[formKey].config}
                    key={formKey}
                    displayName={form[formKey].displayName}/>
            )
        });

        return (
            <React.Fragment>
                <h3>Please enter your contact data</h3>
                {inputFields}
                <Button type={'Success'} clicked={this.props.clicked}>ORDER</Button>
            </React.Fragment>
        )
    }
}

export default ContactForm;
