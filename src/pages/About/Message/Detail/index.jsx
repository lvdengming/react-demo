import React, { Component } from 'react';
// import qs from 'querystring';

const messages = [
    {id: '001', content: '消息1的内容'},
    {id: '002', content: '消息2的内容'},
    {id: '003', content: '消息3的内容'}
];

export default class Detail extends Component {
    render() {
        // 接收params参数
        // const {id, title} = this.props.match.params;

        // 接收search参数
        // const {search} = this.props.location;
        // const {id, title} = qs.parse(search.slice(1));

        // 接收state参数
        const {id, title} = this.props.location.state;

        const {content} = messages.find(msg => msg.id === id);
        return (
            <ul style={{marginTop: '25px', paddingLeft: '25px', paddingTop: '15px', borderTop: '1px solid #dedede'}}>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {content}</li>
            </ul>
        );
    }
};
