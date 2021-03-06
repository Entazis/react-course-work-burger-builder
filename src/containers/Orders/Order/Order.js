import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = Object.keys(props.ingredients).map(igKey => <span key={igKey} className={classes.Ingredient}>{igKey}: {props.ingredients[igKey]}</span>);
    const orderInfo = (
        <div className={classes.OrderInfo}>
            <div>Name: {props.orderInfo.name}</div>
            <div>Phone: {props.orderInfo.phoneNumber}</div>
            <div>Address: {props.orderInfo.address}</div>
            <div>Email: {props.orderInfo.email}</div>
            <div>Delivery Method: {props.orderInfo.deliveryMethod}</div>
        </div>
    );
    return (
        <div className={classes.Order}>
            Ingredients:
            <div>{ingredients}</div>
            TotalPrice: <strong>{props.totalPrice} $</strong>
            {orderInfo}
        </div>
    );
};

export default order;
