import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import MyNavLink from '../MyNavLink';
import Home from '../../pages/Home';
import About from '../../pages/About';
import './index.css';

class RouterCase extends Component {
    goBack = () => this.props.history.goBack();
    goForward = () => this.props.history.goForward();

    render() {
        return (
            <div className="container">
                <h2>React Router Demo</h2>
                <div>
                    <button onClick={this.goBack}>back</button>
                    <button onClick={this.goForward}>forward</button>
                </div>
                <div className="main">
                    <nav>
                        <MyNavLink to="/home">Home</MyNavLink>
                        <MyNavLink to="/about">About</MyNavLink>
                    </nav>
                    <Switch>
                        <Route path="/home" component={Home} className="content"/>
                        <Route path="/about" component={About} className="content"/>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </div>
        );
    }
};

export default withRouter(RouterCase);
