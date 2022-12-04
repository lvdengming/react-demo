import React, { Component } from 'react';
import Search from './Search';
import List from './List';
import './index.css';

export default class GithubSearch extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        );
    }
};
