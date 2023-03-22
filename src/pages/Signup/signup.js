import React from "react";
import form from "react-bootstrap";
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
                    <div class="col-cont">
                        <div class="col-items">
                            <label for="inputEmail4">first name</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="col-items">
                            <label for="inputPassword4">last name</label>
                            <input type="text" class="form-control"></input>
                        </div>
                    </div>
                    <div class="long-text-box">
                        <label for="inputAddress">email</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                     </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;