import React, { Component } from 'react';
import store from '../../redux/store';

export default class ReduxDemo extends Component {

    increment = () => {
        const {value} = this.selectNode;
        // 提交修改状态
        store.dispatch({type: 'increment', data: +value});
    };

    decrement = () => {
        const {value} = this.selectNode;
        store.dispatch({type: 'decrement', data: +value});
    };

    incrementIfOdd = () => {
        const {value} = this.selectNode;
        const num = store.getState();
        if (num % 2 === 1) store.dispatch({type: 'increment', data: +value});
    };

    incrementAsync = () => {
        const {value} = this.selectNode;
        setTimeout(() => store.dispatch({type: 'increment', data: +value}), 500);
    };

    render() {
        return (
            <div>
                <h3>当前求和为：{store.getState()}</h3>
                <select ref={c => this.selectNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
};
