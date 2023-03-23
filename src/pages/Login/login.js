import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function LogInPage() {
    return (
        <div className="container">
            <div className="page-title">
                <h1>Log In to Bear Buddies</h1>
            </div>
            <div className="form-container">
                <Form className="form-style">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-btn">
                        Log In
                    </Button>
                </Form>
            </div>
            <div className="line"></div>
            <div className="not-member-container">
                <h5 className="col-item-member">not a member?</h5>
                <Button variant="primary" type="submit" className="col-item-member-btn" href="../Signup/signup">
                    join the community!
                </Button>
            </div>
        </div>
    )
}

export default LogInPage;