import React, { use } from "react";
import styles from './SignupPage.module.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function SignupPage() {
    const [year, setYear] = useState("select year ");
    const handleSelectYear = (y) => {
        setYear(y);
    }

    const [gender, setGender] = useState("select gender ");
    const handleSelectGender = (g) => {
        setGender(g);
    }

    return (
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
                                    <Dropdown.Item eventKey="female">2026</Dropdown.Item>
                                    <Dropdown.Item eventKey="male">2025</Dropdown.Item>
                                    <Dropdown.Item eventKey="other">2024</Dropdown.Item>
                                    <Dropdown.Item eventKey="other">2023</Dropdown.Item>
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
                        <Button variant="primary" type="submit" className={styles.btn}>Sign Up</Button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default SignupPage;
