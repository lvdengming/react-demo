import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './index.css';

export default class TodoList extends Component {
    state = {
        matters: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '午休', done: true},
            {id: 3, name: '敲代码', done: false},
        ]
    };

    // 添加事项
    addMatter = matter => {
        const matters = this.state.matters;
        const newMatters = [matter, ...matters];
        this.setState({matters: newMatters});
    };
    // 更新事项
    updateMatter = (id, done) => {
        const {matters} = this.state;
        const newMatters = matters.map(matter => {
            if (matter.id === id) return {...matter, done};
            else return matter;
        });
        this.setState({matters: newMatters});
    };
    // 删除事项
    deleteMatter = id => {
        const {matters} = this.state;
        const newMatters = matters.filter(matter => matter.id !== id);
        this.setState({matters: newMatters});
    };
    // 全选/全部取消事项
    handleClickAll = (done) => {
        const {matters} = this.state;
        const newMatters = matters.map(matter => {
            return {...matter, done};
        });
        this.setState({matters: newMatters});
    };
    // 清除已完成的事项
    clearDoneMatter = () => {
        const {matters} = this.state;
        const newMatters = matters.filter(matter => !matter.done);
        this.setState({matters: newMatters});
    };

    render() {
        const {matters} = this.state;
        return (
            <div className='todo-wrapper'>
                <Header addMatter={this.addMatter}/>
                <List
                    matters={matters}
                    updateMatter={this.updateMatter}
                    deleteMatter={this.deleteMatter}
                />
                <Footer
                    matters={matters}
                    handleClickAll={this.handleClickAll}
                    clearDoneMatter={this.clearDoneMatter}
                />
            </div>
        );
    }
};
