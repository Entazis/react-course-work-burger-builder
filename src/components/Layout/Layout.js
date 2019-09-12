import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../UI/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <Toolbar />
                <SideDrawer />
            </header>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;
