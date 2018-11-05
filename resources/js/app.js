
import React from 'react';
import ReactDOM from 'react-dom';

import 'material-icons/iconfont/material-icons.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './bootstrap';

import Header from './components/Header';
import Loader from './components/Loader';
import Card from './components/Card';
import Footer from './components/Footer';

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
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
