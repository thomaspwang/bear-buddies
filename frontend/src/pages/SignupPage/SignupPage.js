import React, { use } from "react";
import styles from './SignupPage.module.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAtom } from "jotai";



function SignupPage() {

    const [signupState, setSignupState] = useAtom(signupAtom);

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        graduationYear: '',
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
            setSignupState({
                status: 'error',
                error: "passwords don't match",
                user: null
            });
            return;
        }

        setSignupState({
            state: 'loading',
            error: null,
            user: null
        })

        const reponse = await fetch("http://127.0.0.1:5000/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(signupData);
        });

        const data = await response.json();

        if (reponse.ok) {
            setSignupData({status: 'success', error: null, user: data});
            // redirect to home page
            window.location.href = '../HomePage/HomePage';
        } else {
            setSignupState({status: 'error', error: data.error, user:null});
        }

    }

    


    const [loginStatus, setLoginStatus] = useAtom(loggedInAtom);
    const changeStatus = () => setLoginStatus(!loginStatus);

    const [path, setPath] = useState("../LoginPage/LoginPage");

    const checkLoginStatus = async () => {
        const response = await fetch("http://127.0.0.1:5000/signup")
        .then((data) => data.json())
        //checks where to send the user --> either the login or keep them in the signup
        if (!response.ok) {
            setPath("/");
        } else {
            changeStatus();
        }
    }

    //------------------------------------------------

    const [year, setYear] = useState("select year ");
    const handleSelectYear = (y) => {
        setYear(y);
    }

    const [gender, setGender] = useState("select gender ");
    const handleSelectGender = (g) => {
        setGender(g);
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.signup_title}>
                    <h1>Sign Up for Bear Buddies</h1>
                </div>
                <div>
                    <h4>Create a free account or <a className={styles.blue_txt} href="../Login/login" style={{textDecoration: 'none', font: 'inherit'}}>login</a></h4>
                </div>
                <div className={styles.data_container}>
                    <form>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>first name</label>
                                <input type="text" className="form-control"></input>
                            </div>
                            <div className={styles.col_items}>
                                <label>last name</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className={styles.long_text_box}>
                            <label>email</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>gender</label>
                                <div className="form-control">
                                    <DropdownButton
                                        className={styles.dropdown_container_button}
                                        menuVariant="dark"
                                        variant=""
                                        title={gender}
                                        id="dropdown-menu-align-right"
                                        size="sm"
                                        flip="true"
                                        bsPrefix={styles.dropdown_button2}
                                        onSelect={handleSelectGender}
                                    >
                                        <Dropdown.Item eventKey="female">female</Dropdown.Item>
                                        <Dropdown.Item eventKey="male">male</Dropdown.Item>
                                        <Dropdown.Item eventKey="other">other</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className={styles.col_items}>
                                <label>major</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>graduation year</label>
                                <div className="form-control">
                                    <DropdownButton
                                        className={styles.dropdown_container_button}
                                        menuVariant="dark"
                                        variant=""
                                        title={year}
                                        id="dropdown-menu-align-right"
                                        size="sm"
                                        flip="true"
                                        bsPrefix={styles.dropdown_button2}
                                        onSelect={handleSelectYear}
                                    >
                                        <Dropdown.Item eventKey="2026">2026</Dropdown.Item>
                                        <Dropdown.Item eventKey="2025">2025</Dropdown.Item>
                                        <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
                                        <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className={styles.col_items}>
                                <label>phone number</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>password</label>
                                <input type="text" className="form-control"></input>
                            </div>
                            <div className={styles.col_items}>
                                <label>confirm password</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="signup-btn-cont">
                            <Button variant="primary" type="submit" className={styles.btn} href={path}>Sign Up</Button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default SignupPage;
