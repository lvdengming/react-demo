import React, { Component } from 'react';
import Search from './Search';
import List from './List';
import './index.css';

export default class GithubSearch extends Component {
    // 初始化状态
    state = {
        users: [],
        isFirst: true,
        isLoading: false, 
        err: ''
    }

    // 更新状态信息
    updateState = (state) => {
        this.setState(state);
    };

    render() {
        return (
            <div className="container">
                <Search updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        );
    }
};
