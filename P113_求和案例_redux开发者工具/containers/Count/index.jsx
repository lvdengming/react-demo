import React, { Component } from 'react';
// 引入connnect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入定义的actions
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count';

class Count extends Component {
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
                <h2>我是Count组件，下方组件数据数目：{this.props.persons.length}</h2>
                <h4>当前求和为：{this.props.count}</h4>
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

// 使用connect()()创建并暴露一个RedexDemo的容器组件
export default connect(
    // mapStateToProps
    state => state,

    // mapDispatchToProps的一般写法(函数)
    // dispatch => ({
    //     increment: num => dispatch(createIncrementAction(num)),
    //     decrement: num => dispatch(createDecrementAction(num)),
    //     incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
    // })

    // mapDispatchToProps的简写(对象，react-redux会自动进行分发(dispatch))
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count);
