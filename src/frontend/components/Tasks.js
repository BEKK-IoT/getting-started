import React from 'react';
import {GADGETS} from '../constants/AppConstants';
import Article from './Article';

module.exports = React.createClass({
    render() {
        const { tasks } = GADGETS[this.props.gadget];
        const articles = tasks.map(task => <Article article={'tasks/' + task} key={task} />);
        return (
            <div>{articles}</div>
        )
    }
});