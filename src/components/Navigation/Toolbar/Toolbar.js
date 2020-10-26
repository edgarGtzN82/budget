import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';


const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>LOGO</div>
            <nav className={classes.DesktopOnly} >
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;