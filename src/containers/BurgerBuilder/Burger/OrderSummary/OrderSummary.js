import React from 'react';
import Button from '../../../../components/UI/Button/Button';

const orderSummary = (props) => {
    return (
        <div>
            You're ordering a delicious burger with the following ingredients:
            <ul>
                {Object.keys(props.ingredients).map(ingKey => <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>)}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.cancel}>Cancel</Button>
            <Button type="Success" clicked={props.continue}>Continue</Button>
        </div>
    );
};

export default orderSummary;
