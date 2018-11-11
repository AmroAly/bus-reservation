
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <div className="container">
                <div className="row login">
                    <div className="col s12 m8">
                        <div className="card blue-grey darken-1">
                            <form className="login__form">
                            <div className="card-content white-text">
                            <span className="card-title center"><h5>Sign In</h5></span>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input placeholder="Email" id="email" type="text" className="validate" />
                                    <label htmlFor="email">Email</label>
                                    </div>                               
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input placeholder="Password" id="password" type="text" className="validate" />
                                    <label htmlFor="password">Password</label>
                                    </div>                               
                                </div>
                            </div>
                            <div className="card-action">
                            <a className="waves-effect waves-light btn" href="#">Login</a>
                            </div>
                            </form>
                            <div className="card-action">
                            <Link to="/sign_up">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;