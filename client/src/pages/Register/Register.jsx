import React from 'react';
import { Button, Form, Input } from 'antd';
import { RegisterUser } from '../../api/users';


// Token Remains here, and in userRoutes.js [TODO later] 
function Register() {
    const onFinish = async (values) => {
        const response = await RegisterUser(values);
        console.log(response);
    }

    return (
        <header className='App-header'>
            <main className='main-area mw-500 text-center px-3'>
                <section className='left-section'>
                    <h1>Register to BookMyShow</h1>
                </section>

                <section className='right-section'>
                    <Form layout='vertical' onFinish={onFinish}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Name is required" }]}
                        >
                            <Input placeholder="Enter your Name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Email is required" }]}
                        >
                            <Input type="text" placeholder="Enter your Email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Password is required" }]}
                        >
                            <Input type="password" placeholder="Enter your Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" block htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </main>
        </header>
    )
}

export default Register;
