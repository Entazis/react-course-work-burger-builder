import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem
    from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem label="Burger Builder" link="/"/>
        <NavigationItem label="Checkout" link="/"/>
    </ul>
);

export default navigationItems;
