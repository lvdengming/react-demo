import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
    // 对props进行类型和必要性限制
    static propTypes = {
        matters: PropTypes.array.isRequired,
        updateMatter: PropTypes.func.isRequired,
        deleteMatter: PropTypes.func.isRequired
    };

    render() {
        const {matters, updateMatter, deleteMatter} = this.props;
        return (
            <div className='todo-list'>
                {
                    matters.map(matter => {
                        return (
                            <Item
                                key={matter.id}
                                {...matter}
                                updateMatter={updateMatter}
                                deleteMatter={deleteMatter}
                            />
                        );
                    })
                }
            </div>
        );
    }
};
