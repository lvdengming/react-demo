import React, { Component } from 'react';
import PubSub from 'pubsub-js';
// import axios from 'axios';
import './index.css';

export default class Search extends Component {
    search = async () => {
        const username = this.username.value;
        PubSub.publish('users', {isFirst: false, isLoading: true});

        // #region axios版本
        // axios.get(`/api/search/users?q=${username}`)
        //     .then(res => PubSub.publish('users', {isLoading: false, users: res.data.items}))
        //     .catch(err => PubSub.publish('users', {isLoading: false, err}));
        // #endregion

        // #region 使用fetch发送请求
        // fetch(`/api/search/users?q=${username}`)
        //     .then(res => res.json())
        //     .then(res => PubSub.publish('users', {isLoading: false, users: res.items}))
        //     .catch(err => PubSub.publish('users', {isLoading: false, err}));
        // #endregion

        // #region 使用fetch发送请求（优化版本）
        try {
            const response = await fetch(`/api/search/users?q=${username}`);
            const data = await response.json();
            PubSub.publish('users', {isLoading: false, users: data.items});
        }
        catch (err) {
            PubSub.publish('users', {isLoading: false, err});
        }
        // #endregion
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
