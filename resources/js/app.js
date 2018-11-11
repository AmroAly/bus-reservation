
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import 'material-icons/iconfont/material-icons.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './bootstrap';

import Header from './components/Header';
import Loader from './components/Loader';
import Card from './components/Card';
import Footer from './components/Footer';
import Search from './components/Search';
import Signin from './components/Signin';
import Signup from './components/Signup';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
        return (
            <div>
                <Loader show={this.state.loading} />
                <div className={this.state.loading ? 'wrapper-hidden': 'wrapper'}>

                    <div className="home__img">
                        <img src="/images/optimized-bus-2.jpg" />
                    </div>
                    <Search />
                    <div  className="container home">
                        <div className="text-center  home__heading">
                            <h3>Popular Buses</h3>
                        </div>
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="row">
                                    <div className="col s12">
                                        <Card />
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="row">
                                    <div className="col s12">
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col s12 m4">
                                <div className="row">
                                    <div className="col s12">
                                        <Card />
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

ReactDOM.render(
<Router>
    <div>
        <Header />
        <Route path="/" exact component={App} />
        <Route path="/sign_in" component={Signin} />
        <Route path="/sign_up" component={Signup} />
        <Footer />
    </div>
</Router>
, document.getElementById('app'));
