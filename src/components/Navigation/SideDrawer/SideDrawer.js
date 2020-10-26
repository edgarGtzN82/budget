
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'

import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <p>{props.currentUser===null ? null : props.currentUser.uid }</p>
                <nav>
                    <NavigationItems
                        currentUser={props.currentUser}
                        optionClicked={props.closed} />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;