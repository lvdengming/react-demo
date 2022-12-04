import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

export default class Search extends Component {
    search = () => {
        const username = this.username.value;
        const {updateState} = this.props;
        updateState({isFirst: false, isLoading: true});

        axios.get(`/api/search/users?q=${username}`)
            .then(res => {
               updateState({isLoading: false, users: res.data.items});
            })
            .catch(err => updateState({isLoading: false, err}));
    };

    render() {
        return (
            <div className="search">
                <h3>Search Github Users</h3>
                <input
                    type="text"
                    placeholder="enter user name"
                    ref={c => this.username = c}
                />
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
};
