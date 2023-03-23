import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './signup.module.css';


function SignUpPage() {
    return (
        <div className={styles.container}>
            <div className={styles.signup_title}>
                <h1>Sign Up for Bear Buddies</h1>
            </div>
            <div>
                <h4>Create a free account or <a className={styles.blue_txt} href="../Login/login">login</a></h4>
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
                                <option selected>select gender</option>
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
                                <option selected className={styles.defualt_text_fill}>select year</option>
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
                        <button type="submit" className={styles.btn}>Sign Up</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;