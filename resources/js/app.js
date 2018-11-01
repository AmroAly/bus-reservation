
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
                    <img src="/images/bus-2.jpg" />
                </div>
                <div  className="container-fluid" id="home">
                    <h1>Hello World</h1>
                    <div className="row">
                        <div className="col s1">1</div>
                        <div className="col s1">2</div>
                        <div className="col s1">3</div>
                        <div className="col s1">4</div>
                        <div className="col s1">5</div>
                        <div className="col s1">6</div>
                        <div className="col s1">7</div>
                        <div className="col s1">8</div>
                        <div className="col s1">9</div>
                        <div className="col s1">10</div>
                        <div className="col s1">11</div>
                        <div className="col s1">12</div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
