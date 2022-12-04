import React, { Component } from 'react';

export default class ReduxDemo extends Component {

    increment = () => {
        const {value} = this.selectNode;
        this.props.increment(+value);
    };

    decrement = () => {
        const {value} = this.selectNode;
        this.props.decrement(+value);
    };

    incrementIfOdd = () => {
        const {value} = this.selectNode;
        const {count} = this.props;
        if (count % 2 === 1) this.props.increment(+value);
    };

    incrementAsync = () => {
        const {value} = this.selectNode;
        this.props.incrementAsync(+value, 1000);
    };

    render() {
        return (
            <div>
                <h3>当前求和为：{this.props.count}</h3>
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
