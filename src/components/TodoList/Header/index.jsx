import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

export default class Header extends Component {
    // 对props进行类型和必要性限制
    static propTypes = {
        addMatter: PropTypes.func.isRequired
    };

    submit = e => {
        const {keyCode, target} = e;
        // 按下非回车键，则继续输入不处理
        if (keyCode !== 13) return;
        // 输入内容不能为空
        if (target.value.trim().length === 0) return;
        // 创建事项对象
        const matter = {id: nanoid(), name: target.value, done: false};
        // 调用回调函数，通知父组件添加数据
        this.props.addMatter(matter);
        // 清除输入项
        target.value = '';
    };

    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="请输入你的任务名称，按回车键确认"
                    onKeyUp={this.submit}
                />
            </div>
        );
    }
};
