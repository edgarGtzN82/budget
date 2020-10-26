import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import 'font-awesome/css/font-awesome.min.css';


const NavigationItems = (props) => {

    return (
    <ul onClick={props.optionClicked} className={classes.NavigationItems}>
        <NavigationItem
            link="/">Home
        </NavigationItem>
        <NavigationItem
            link="/expenses"
            exact>
            <i className={'fa fa-usd'} ></i>
                Gastos
        </NavigationItem>
        <NavigationItem
                link={props.currentUser === null ? '/login' : '/logout'}>
                {props.currentUser===null ? 'Login' : 'Logout'}
        </NavigationItem>
        <NavigationItem
            link="/signup">SignUp
        </NavigationItem>
    </ul>
    )};

export default NavigationItems; 