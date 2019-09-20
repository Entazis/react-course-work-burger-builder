import React
    from 'react';
import Button from '../Button/Button';
import Input
    from './Input/Input';

const contactForm = (props) => {
    return (
        <React.Fragment>
            <h3>Please enter your contact data</h3>
            <Input type="text" name="name" displayName="Your name" placeholder="Enter your name" />
            <Input type="text" name="address" displayName="Your address" placeholder="Enter your address" />
            <Input type="text" name="phone" displayName="Phone number" placeholder="Enter your phone number" />
            <Button type={'Success'} clicked={props.clicked}>ORDER</Button>
        </React.Fragment>
    );
};

export default contactForm;
