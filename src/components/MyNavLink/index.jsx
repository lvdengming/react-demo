import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink className="link" activeClassName="active" {...this.props}/>
        );
    }
};
