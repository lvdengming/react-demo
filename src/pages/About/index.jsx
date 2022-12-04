import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';
import News from './News';
import Message from './Message';
import './index.css';

export default class index extends Component {
    render() {
        return (
            <div className="home">
                <h3>我是About的内容</h3>
                <nav className="nav-container">
                    {/* 编写路由链接 */}
                    <MyNavLink to="/about/news" className="nav-item">News</MyNavLink>
                    <MyNavLink to="/about/message" className="nav-item">Message</MyNavLink>
                </nav>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/about/news" component={News}/>
                    <Route path="/about/message" component={Message}/>
                    <Redirect to="/about/news"/>
                </Switch>
            </div>
        );
    }
};
