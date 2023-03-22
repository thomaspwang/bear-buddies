import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function SignUpPage() {
    return (
        <div className="container">
            <div className="signup-title">
                <h1>Sign Up for Bear Buddies</h1>
            </div>
            <div>
                <h4>Create a free account or <a className="blue-txt" href="../Login/login">login</a></h4>
            </div>
            <div className="data-container">
                <form>
                    <div className="col-cont">
                        <div className="col-items">
                            <label>first name</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div className="col-items">
                            <label>last name</label>
                            <input type="text" class="form-control"></input>
                        </div>
                    </div>
                    <div className="long-text-box">
                        <label>email</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col-cont">
                        <div className="col-items">
                            <label>gender</label>
                            <select className="form-control">
                                <option selected>select gender</option>
                                <option>male</option>
                                <option>female</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div className="col-items">
                            <label>major</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-cont">
                        <div className="col-items">
                            <label>graduation year</label>
                            <select className="form-control">
                                <option selected className="default-text-fill">select year</option>
                                <option>2026</option>
                                <option>2025</option>
                                <option>2024</option>
                                <option>2023</option>
                            </select>
                        </div>
                        <div className="col-items">
                            <label>phone number</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-cont">
                        <div className="col-items">
                            <label>password</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div className="col-items">
                            <label>confirm password</label>
                            <input type="text" class="form-control"></input>
                        </div>
                    </div>
                    <div className="signup-btn-cont">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;