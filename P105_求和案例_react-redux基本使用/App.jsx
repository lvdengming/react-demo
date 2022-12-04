import React, { Component } from 'react';
import ReduxDemo from './containers/ReduxDemo';
import store from './redux/store';

export default class App extends Component {
    render() {
        return (
            // 给容器组件传递store
            <ReduxDemo store={store}/>
        );
    }
};
