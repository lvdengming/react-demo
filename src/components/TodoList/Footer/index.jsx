import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class index extends Component {
    static propTypes = {
        matters: PropTypes.array.isRequired,
        handleClickAll: PropTypes.func.isRequired,
        clearDoneMatter: PropTypes.func.isRequired
    };

    handleChange = e => {
        const done = e.target.checked;
        this.props.handleClickAll(done);
    };

    render() {
        const {matters} = this.props;
        // 已完成个数，全部个数
        const doneCount = matters.reduce((prev, matter) => prev + (matter.done ? 1 : 0), 0);
        const totalCount = matters.length;
        // 是否全部完成
        const doneAll = matters.length > 0 && doneCount === totalCount;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneAll} onChange={this.handleChange}/>
                    <span>已完成{doneCount} / 全部{totalCount}</span>
                </label>
                <button onClick={() => this.props.clearDoneMatter()}>清除已完成的事项</button>
            </div>
        );
    }
};
