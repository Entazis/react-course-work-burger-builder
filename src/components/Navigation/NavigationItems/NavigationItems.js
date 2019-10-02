import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

class navigationItems extends Component {

    render() {
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Burger Builder</NavigationItem>
                <NavigationItem link="/my-orders">Orders</NavigationItem>
                {(this.props.user) ?
                    <NavigationItem link="/logout">Logout</NavigationItem> :
                    <NavigationItem link="/auth">Login / Signup</NavigationItem>
                }
            </ul>);
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(navigationItems);
