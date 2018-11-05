
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="teal lighten">
                <h4>Bus Egypt</h4>
                <div className="footer-left">
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Do you have a question?</a>
                        </li>
                        <li>
                            <a href="#">Partners</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <p>All Copyright reserved BusEgypt.com&copy;</p>
            </footer>
        );
    }
}

export default Footer;