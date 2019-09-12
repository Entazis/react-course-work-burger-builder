import React from 'react';

const orderSummary = (props) => {
    return (
        <div>
            You're ordering a delicious burger with the following ingredients:
            <ul>
                {Object.keys(props.ingredients).map(ingKey => <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>)}
            </ul>
        </div>
    );
};

export default orderSummary;
