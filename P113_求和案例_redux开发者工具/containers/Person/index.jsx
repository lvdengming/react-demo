import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const person = {id: nanoid(), name, age};
        this.props.addPerson(person);

        // 清空状态
        this.nameNode.value = '';
        this.ageNode.value = '';
    };

    render() {
        return (
            <div>
                <h2>我是Person组件，上方组件求和为{this.props.count}</h2>
                <input type="text" placeholder="请输入姓名" ref={c => this.nameNode = c}/>
                <input type="text" placeholder="请输入年龄" ref={c => this.ageNode = c}/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map(person => <li key={person.id}>姓名：{person.name}，年龄：{person.age}</li>)}
                </ul>
            </div>
        );
    }
};

export default connect(
    state => state,
    {addPerson: createAddPersonAction}
)(Person);
