
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    render() {
        return (
            <div className="container">
                <div className="row signup">
                    <div className="col s12 m8">
                        <div className="card blue-grey darken-1">
                            <form className="signup__form">
                            <div className="card-content white-text">
                            <span className="card-title center"><h5>Create an account</h5></span>
                                <div className="row">
                                    <div className="input-field col s10">
                                    <input placeholder="Email" id="email" type="text" className="validate" />
                                    <label htmlFor="email">Email</label>
                                    </div>                               
                                </div>
                                <div className="row">
                                    <div className="input-field col s10">
                                    <input placeholder="Password" id="password" type="text" className="validate" />
                                    <label htmlFor="password">Password</label>
                                    </div>                               
                                </div>
                                <div className="row">
                                    <div className="input-field col s10">
                                    <input placeholder="Confirm Password" id="password_confirmation" type="text" className="validate" />
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    </div>                               
                                </div>
                            </div>
                            <div className="card-action">
                            <a className="waves-effect waves-light btn" href="#">Sign Up</a>
                            </div>
                            </form>
                            <div className="card-action">
                            <Link to="/sign_in">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;