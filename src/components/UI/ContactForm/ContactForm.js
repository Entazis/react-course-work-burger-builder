import React
    from 'react';
import Button from '../Button/Button';

const contactForm = (props) => {
    return (
        <React.Fragment>
            <h3>Please enter your contact date</h3>
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="text" name="address" placeholder="Enter your address" />
            <input type="text" name="phone" placeholder="Enter your phone number" />
            <Button type={'Success'} clicked={props.clicked}>ORDER</Button>
        </React.Fragment>
    );
};

export default contactForm;
