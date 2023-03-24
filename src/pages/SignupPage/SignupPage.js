import React from "react";
import styles from './Signup.module.css';
import Button from 'react-bootstrap/Button';


function SignupPage() {
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
                            <select className="form-control">
                                <option value="" disabled selected hidden>select gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⌄</option>
                                <option>male</option>
                                <option>female</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div className={styles.col_items}>
                            <label>major</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className={styles.col_cont}>
                        <div className={styles.col_items}>
                            <label>graduation year</label>
                            <select className="form-control">
                                <option value="" disabled selected hidden className={styles.default_text}>
                                    select year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⌄
                                </option>
                                <option>2026</option>
                                <option>2025</option>
                                <option>2024</option>
                                <option>2023</option>
                            </select>
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

export default SignUpPage;
