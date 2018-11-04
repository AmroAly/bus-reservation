
import React from 'react';
import ReactDOM from 'react-dom';

import 'material-icons/iconfont/material-icons.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './bootstrap';

import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home__img">
                    <img src="/images/optimized-bus-2.jpg" />
                </div>
                <div  className="container home">
                    <div className="text-center  home__heading">
                        <h3>Popular Buses</h3>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="row">
                                <div className="col s12">
                                    <div className="card medium">
                                        <div className="card-image">
                                        <img src="images/bus.jpg" />
                                        <span className="card-title">Card Title</span>
                                        </div>
                                        <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="row">
                                <div className="col s12">
                                    <div className="card medium">
                                        <div className="card-image">
                                        <img src="images/bus.jpg" />
                                        <span className="card-title">Card Title</span>
                                        </div>
                                        <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col s12 m4">
                            <div className="row">
                                <div className="col s12">
                                    <div className="card medium">
                                        <div className="card-image">
                                        <img src="images/bus.jpg" />
                                        <span className="card-title">Card Title</span>
                                        </div>
                                        <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                        <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
