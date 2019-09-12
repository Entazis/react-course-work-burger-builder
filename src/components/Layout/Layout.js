import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../UI/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
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
                    <Toolbar/>
                    <SideDrawer
                        closed={this.sideDrawerClosedHandler}
                        show={this.state.showSideDrawer}
                        opened={this.sideDrawerOpenedHandler}
                    />
                </header>
                <main className={classes.Content}>
                    {this.children}
                </main>
            </React.Fragment>
        )
    };
}

export default Layout;
