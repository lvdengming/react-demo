import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {
    // 对props进行类型和必要性限制
    static propTypes = {
        updateMatter: PropTypes.func.isRequired,
        deleteMatter: PropTypes.func.isRequired
    };

    // 修改事项状态时，处理
    handleChange = id => {
        return e => {
            this.props.updateMatter(id, e.target.checked);
        }
    };
    // 删除事项
    handleDelete = (id) => {
        if (window.confirm('是否删除该事项？')) {
            this.props.deleteMatter(id);
        }
    };

    render() {
        const {id, name, done} = this.props;
        return (
            <div className="todo-item">
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleChange(id)}
                    />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)}>删除</button>
            </div>
        );
    }
};
