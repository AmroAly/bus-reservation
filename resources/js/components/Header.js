import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends Component {

    render() {
        return (
            <header>
                <nav className="teal lighten-2">
                    <div className="container">
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Bus Egypt</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/sign_in">Sign In</Link></li>
                        <li><a href="mobile.html">Our App</a></li>
                    </ul>
                    </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sign_in">Sign In</Link></li>
                    <li><a href="mobile.html">Our App</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
