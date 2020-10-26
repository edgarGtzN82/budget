
import classes from './Layout.module.css';
import React, { useState, useContext } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Burger from '../../components/Navigation/Burger/Burger';
import { AuthContext } from '../../Auth';

const Layout = (props) => {
    
    const { currentUser } = useContext(AuthContext);
    const [showDrawer, setShowDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowDrawer(false)
    }

    const sideDrawerOpenHandler = () => {
        setShowDrawer(true);
    }

    return (
        <>
            <Burger
                burgerOpened={showDrawer}
                clicked={sideDrawerOpenHandler} />
            <Toolbar 
                ShowCross={showDrawer}
                showDrawer={sideDrawerOpenHandler} />
            <SideDrawer 
                currentUser={currentUser}
                open={showDrawer} 
                closed={sideDrawerCloseHandler} />
            <main className={classes.Content} >
                {props.children}
            </main>
        </>
    );
}


export default Layout;