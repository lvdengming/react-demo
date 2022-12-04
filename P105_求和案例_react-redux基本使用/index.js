import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// 检测redux中状态的变化，若redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => root.render(<App/>));
