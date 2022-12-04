import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {
    // 初始化状态
    state = {
        users: [],
        isFirst: true,
        isLoading: false, 
        err: ''
    }

    componentDidMount() {
        // 订阅消息
        this.token = PubSub.subscribe('users', (msg, data) => {
            this.setState(data);
        });
    }

    componentWillUnmount() {
        // 取消订阅
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state;

        return (
            <div className="user-list">
                {
                    isFirst ? <h2>Input username to search</h2>
                            : isLoading ? <h3>Loading...</h3>
                            : err ? <h3 style={{color: 'red'}}>{err.message}</h3>
                            : users.length === 0 ? <h3>Cannot find users</h3>
                            : users.map(user => {
                                return (
                                    <div className="user" key={user.id}>
                                        <a href={user.html_url} target="_blank" rel="noreferrer">
                                            <img src={user.avatar_url} alt="head_img" />
                                            <span>{user.login}</span>
                                        </a>
                                    </div>
                                );
                            })
                }
            </div>
        );
    }
};
