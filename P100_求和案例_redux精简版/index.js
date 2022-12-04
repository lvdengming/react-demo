import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// 检测redux中状态的变化，只要变化，就调用render
store.subscribe(() => root.render(<App/>));
