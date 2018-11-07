
import React, { Component } from 'react';

class Search extends Component {
    render () {
        return (
            <div className="container search">
                <div className="row">
                    <h4 className="search__heading">Find Your Seat</h4>
                    <form className="search__form">
                        <div className="col s12 m6 l3 xl3">
                            <input type="text" autoFocus />
                        </div>
                        <div className="col s12 m6 l3 xl3">
                            <input type="text" />
                        </div>
                        <div className="col s12 m6 l3 xl3">
                            <input type="text" />
                        </div>
                        <div className="col s12 m6 l3 xl3">
                        <select>
                            <option value="">Options</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="clearfix"></div>
                        <div className="center">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Search
                                <i className="material-icons right">search</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;