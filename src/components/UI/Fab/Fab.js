import React from 'react';
import classes from './Fab.module.css';
import 'font-awesome/css/font-awesome.min.css';

const Fab = () => {
    return(
        <div className>
            <a href="/" className={classes.float}>
                <i className={'fa fa-plus ' + classes.myFloat} ></i>
            </a>
            <div className={classes.labelContainer}>
                <div className={classes.labelText}>Agregar Gasto</div>
                <i className={'fa fa-play ' + classes.labelArrow} ></i>
            </div>
        </div>
    );
}

export default Fab;