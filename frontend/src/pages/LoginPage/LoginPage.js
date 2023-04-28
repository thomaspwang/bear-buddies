import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import styles from './LoginPage.module.css';
import ErrorBar from "@/components/ErrorBar/ErrorBar";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { currUser } from "@/atoms";


function LoginPage() {

    const [user, setUser] = useAtom(currUser);

    useEffect(() => {
        console.log("current user:", user);
    }, [user]);

    const [error, setError] = useState(null);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const emptyFields = email == '' || password == '';

        if (emptyFields) {
            setError("Please fill in all fields");
            return;
        } 

        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Invalid email or password");
            }
        }).then((responseJson) => {
            setUser(responseJson);
            router.push('/HomePage/HomePage');
        }).catch((error) => {
            console.log(error);
            setError("Invalid email or password");
        })
    }

    return (
        <div>
            <ErrorBar e={error}></ErrorBar>
            <div className={styles.container}>
                <div className={styles.page_title}>
                    <h1>Log In to Bear Buddies</h1>
                </div>
                <div className={styles.form_container}>
                    <Form className={styles.form_style}>
                        <Form.Group className={styles.mb_3} controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className={styles.mb_3} controlId="formBasicPassword">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className={styles.submit_btn} onClick={handleLogin}>
                            Log In
                        </Button>
                    </Form>
                </div>
                <div className={styles.line}></div>
                <div className={styles.not_member_container}>
                    <h5 className={styles.col_item_member}>not a member?</h5>
                    <Button variant="primary" type="submit" className={styles.col_item_member_btn} href="../SignupPage/SignupPage">
                        join the community!
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
