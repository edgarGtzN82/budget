import React from 'react';
import classes from './Burger.module.css';

const Burger = (props) => {
    
    return (
       <>
            <div 
                className={classes.styledDiv}
                onClick={props.clicked}  >
                <div className={classes.divBurger}
                    style={props.burgerOpened ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }} />
                <div className={classes.divBurger}
                    style={props.burgerOpened ? { transform: 'translate(-190%)' } : { transform: 'translate(0)' }} />
                <div className={classes.divBurger}
                    style={props.burgerOpened ? { transform: 'rotate(-45deg)' } : {transform: 'rotate(0)'}} />
            </div>
        </>
    )
}

export default Burger;