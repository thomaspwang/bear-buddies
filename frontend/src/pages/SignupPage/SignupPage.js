import React, { use } from "react";
import styles from './SignupPage.module.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAtom, atom} from "jotai";
import {currUser} from '../../atoms.js';


function SignupPage() {

    const [user, setUser] = useAtom(currUser);

    const [path, setPath] = useState("/HomePage/HomePage");

    const changeStatus = () => setUser({});


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [genderi, setGenderi] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    first_name: firstName,
                    last_name: lastName,
                    genderi,
                    phone_number: phoneNumber,
                    graduation_year: graduationYear,
                    major
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.response);
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
                    <h4>Create a free account or <a className={styles.blue_txt} href="../LoginPage/LoginPage" style={{textDecoration: 'none', font: 'inherit'}}>login</a></h4>
                </div>
                <div className={styles.data_container}>
                    <form>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>first name</label>
                                <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className={styles.col_items}>
                                <label>last name</label>
                                <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" required></input>
                            </div>
                        </div>
                        <div className={styles.long_text_box}>
                            <label>email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required></input>
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
                                        required
                                        bsPrefix={styles.dropdown_button2}
                                        onSelect={handleSelectGender}
                                        name="genderi"
                                        value={genderi}
                                        onChange={(e) => setGenderi(e.target.value)}
                                    >
                                        <Dropdown.Item eventKey="female">female</Dropdown.Item>
                                        <Dropdown.Item eventKey="male">male</Dropdown.Item>
                                        <Dropdown.Item eventKey="other">other</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className={styles.col_items}>
                                <label>major</label>
                                <input type="text" name="major" value={major} onChange={(e) => setMajor(e.target.value)} className="form-control" required></input>
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
                                        required 
                                        name="graduation_year"
                                        value={graduationYear}
                                        onChange={(e) => setGraduationYear(e.target.value)}
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
                                <input type="text" name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" required></input>
                            </div>
                        </div>
                        <div className={styles.col_cont}>
                            <div className={styles.col_items}>
                                <label>password</label>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required></input>
                            </div>
                            <div className={styles.col_items}>
                                <label>confirm password</label>
                                <input type="password" className="form-control" required></input>
                            </div>
                        </div>
                        <div className="signup-btn-cont">
                            <Button 
                                variant="primary" type="submit" className={styles.btn} href={path} onClick={handleSubmit}>
                            Sign Up
                            </Button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default SignupPage;
