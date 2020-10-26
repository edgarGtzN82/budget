import React, { useEffect } from 'react';
import firebase from '../../data/firebase';
import { Result } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import Title from '../../components/UI/Title/Title';

const Logout = () => {
    
    useEffect(() => {
        firebase.auth().signOut()
        .then(() => console.log('Saliste'));
    }, []);

    
    return (
        <>
            <Title text='Logout' />
            <Result
                icon={<FrownOutlined />}
                title="No olvides regresar a registrar tus Gastos!"
            />
        </>
    );
}

export default Logout;