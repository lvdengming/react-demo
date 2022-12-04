import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messages: [
            {id: '001', title: '消息1'},
            {id: '002', title: '消息2'},
            {id: '003', title: '消息3'}
        ]
    };

    // params参数
    // pushShow = (id, title) => this.props.history.push(`/about/message/detail/${id}/${title}`);
    // replaceShow = (id, title) => this.props.history.replace(`/about/message/detail/${id}/${title}`);

    // search参数
    // pushShow = (id, title) => this.props.history.push(`/about/message/detail?id=${id}&title=${title}`);
    // replaceShow = (id, title) => this.props.history.replace(`/about/message/detail?id=${id}&title=${title}`);

    // state参数
    pushShow = (id, title) => this.props.history.push('/about/message/detail', {id, title});
    replaceShow = (id, title) => this.props.history.replace('/about/message/detail', {id, title});

    // goBack/goForward/go
    goBackShow = () => this.props.history.goBack();
    goForwardShow = () => this.props.history.goForward();
    goShow = n => this.props.history.go(n);

    render() {
        const {messages} = this.state;
        return (
            <div>
                <ul style={{marginLeft: '25px'}}>
                    {
                        messages.map(msg => {
                            return (
                                <li key={msg.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/about/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递search参数  */}
                                    {/* <Link to={`/about/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link replace to={{pathname: '/about/message/detail', state: {id: msg.id, title: msg.title}}}>{msg.title}</Link>

                                    {/* 编程式路由导航 */}
                                    <button onClick={() => this.pushShow(msg.id, msg.title)}>push</button>&nbsp;
                                    <button onClick={() => this.replaceShow(msg.id, msg.title)}>replace</button>
                                </li>
                            );
                        })
                    }
                </ul>

                {/* goBack/goForward/go */}
                <button onClick={this.goBackShow}>goBack</button>
                <button onClick={this.goForwardShow}>goForward</button>
                <button onClick={() => this.goShow(-2)}>go</button>

                {/* 声明接收params参数 */}
                {/* <Route path="/about/message/detail/:id/:title" component={Detail}/> */}

                {/* 无需声明接收params参数，正常注册路由即可 */}
                {/* <Route path="/about/message/detail" component={Detail}/> */}

                {/* 无需声明接收state参数，正常注册路由即可 */}
                <Route path="/about/message/detail" component={Detail}/>
            </div>
        );
    }
};
