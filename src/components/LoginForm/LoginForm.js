
import React from 'react';
import { Form, Input, Button } from 'antd';
//import './Login.module.css'
import classes from './LoginForm.module.css';


const LoginForm = ({ onLogin }) => {
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24, },
            sm: { span: 8, },
        },
        wrapperCol: {
            xs: { span: 24, },
            sm: { span: 16, },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: { span: 24, offset: 0, },
            sm: { span: 16, offset: 8, },
        },
    };

    return (
        <div className={classes.LoginForm} >
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onLogin}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;