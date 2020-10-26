import React from 'react';
import classes from './Title.module.css'

const Title = ( {text} ) => {
    return(
        <div className={classes.Title}>
            <h1>{text}</h1> 
        </div>
    )
}

export default Title;