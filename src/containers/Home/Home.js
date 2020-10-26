import React from 'react';
import { Result } from 'antd';
import Title from '../../components/UI/Title/Title'
import { SmileOutlined } from '@ant-design/icons';

const Home = () => {
        
    return (
        <>
            <Title text='Home Page' />
            <Result
                icon={<SmileOutlined />}
                title="BIENVENIDO!"
            />
        </>
    );
}

export default Home;