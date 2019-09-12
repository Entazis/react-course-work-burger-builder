import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../UI/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerOpenedHandler = () => {
        this.setState({showSideDrawer: true});
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <Toolbar clicked={this.sideDrawerOpenedHandler}/>
                    <SideDrawer
                        closed={this.sideDrawerClosedHandler}
                        show={this.state.showSideDrawer}
                        opened={this.sideDrawerOpenedHandler}
                    />
                </header>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    };
}

export default Layout;
