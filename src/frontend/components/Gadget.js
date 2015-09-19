import React from 'react';
import Article from './Article';
import Tasks from './Tasks';
import InstallScript from './InstallScript';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro'; 
        const gadgetTasks = this.props.params.gadget + '/tasks'; 
        return (
            <div className="gadget-overview">
                <div>
                    <Article article={intro} />
                </div>
                <div>
                    <h2> Install </h2>
                    <Article article='install'/>
                    <InstallScript gadget={this.props.params.gadget} />
                </div>
                <div>
                    <h2> Tasks </h2>
                    <Tasks gadget={this.props.params.gadget} />
                </div>
            </div>
        )
    }
});