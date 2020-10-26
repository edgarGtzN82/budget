import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import firebase from '../../data/firebase'; 
import { withRouter } from 'react-router';
import Title from '../../components/UI/Title/Title';

const Login = ( { history } ) => {
   
    const submitHandler = (newUser) => {
        

        firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
        .then( () => {
            console.log('login extioso');
            setTimeout(() => {
                history.push('/'); 
            }, 1000);
        })
        .catch(err => console.log(err));
    }
   
    return (
        <div className='app-content' >
            <Title text = 'Login' />
            <LoginForm onLogin={submitHandler} />
        </div>
    )
};

export default withRouter(Login);


