import React from 'react';
import Article from './Article';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro'; 
        const gadgetTasks = this.props.params.gadget + '/tasks'; 
        return (
            <div className="gadget-overview">
                <div><Article article={intro} /></div>
                <div><Article article='install' /></div>
                <div><Article article='tasks' /></div>
                <div><Article article={gadgetTasks} /></div>
            </div>
        )
    }
});