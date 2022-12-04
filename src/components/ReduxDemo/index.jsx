import React, { Component } from 'react';

export default class ReduxDemo extends Component {
    state = {num: 0};

    increment = () => {
        const {value} = this.selectNode;
        const {num} = this.state;
        this.setState({num: num + +value});
    };

    decrement = () => {
        const {value} = this.selectNode;
        const {num} = this.state;
        this.setState({num: num - +value});
    };

    incrementIfOdd = () => {
        const {value} = this.selectNode;
        const {num} = this.state;
        if (num % 2 === 1) this.setState({num: num + +value});
    };

    incrementAsync = () => {
        const {value} = this.selectNode;
        const {num} = this.state;
        setTimeout(() => this.setState({num: num + +value}), 500);
    };

    render() {
        return (
            <div>
                <h3>当前求和为：{this.state.num}</h3>
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
