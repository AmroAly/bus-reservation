import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="teal lighten-2">
                    <div className="container">
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Bus Egypt</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Services</a></li>
                        <li><a href="mobile.html">Our App</a></li>
                    </ul>
                    </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Services</a></li>
                    <li><a href="mobile.html">Our App</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
