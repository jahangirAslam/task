import React, { useRef } from "react";
import "./login.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onFinish = async (event) => {
        event.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        console.log("Email:", emailValue);
        console.log("Password:", passwordValue);
        const payload = {
            email: emailValue,
            password: passwordValue,
            type: "1"
        };
        const res = await axios.post('https://lmsapi.besttutorforyou.com/api/login', payload)
            .then(response => {
                navigate('/resume');
                console.log(response.data);
            })
            .catch(error => {
                alert('Invalid password. Please try again.');
                console.error(error);
            });

    };

    return (
        <div>
            <Container className="login-container">
                <Row className="justify-content-center form-container">
                    <Col className="shadow form-col" sm={12} lg={7}>
                        <Form onSubmit={onFinish}>
                            <Form.Group className="mb-3 form-groups" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="form-inputs" type="email" placeholder="Enter Your email" ref={emailRef} />
                            </Form.Group>

                            <Form.Group className="mb-3 form-groups" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="form-inputs" type="password" placeholder="Password" ref={passwordRef} />
                            </Form.Group>

                            <Button className="loginBtn form-groups" type="submit">
                             Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;




