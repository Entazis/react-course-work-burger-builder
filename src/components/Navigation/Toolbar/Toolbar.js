import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawToggler from '../../UI/SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawToggler clicked={props.clicked}/>
        <div className={classes.Logo}>
            <Link to="/"><Logo /></Link>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
