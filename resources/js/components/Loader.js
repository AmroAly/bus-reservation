
import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={!this.props.show ?  'hidden': 'loader'}>
            <h3>Loading...</h3>
                <img className="loader__image" src="/images/5.gif" />
            </div>
        );
    }
}

export default Loader;