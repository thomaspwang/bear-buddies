import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import styles from './login.module.css';

function LogInPage() {
    return (
        <div className={styles.container}>
            <div className={styles.page_title}>
                <h1>Log In to Bear Buddies</h1>
            </div>
            <div className={styles.form_container}>
                <Form className={styles.form_style}>
                    <Form.Group className={styles.mb_3} controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>
                    <Form.Group className={styles.mb_3} controlId="formBasicPassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={styles.submit_btn}>
                        Log In
                    </Button>
                </Form>
            </div>
            <div className={styles.line}></div>
            <div className={styles.not_member_container}>
                <h5 className={styles.col_item_member}>not a member?</h5>
                <Button variant="primary" type="submit" className={styles.col_item_member_btn} href="../Signup/signup">
                    join the community!
                </Button>
            </div>
        </div>
    )
}

export default LogInPage;