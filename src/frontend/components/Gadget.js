import React from 'react';
import Article from './Article';
import Tasks from './Tasks';
import InstallScript from './InstallScript';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro';
        const install = this.props.params.gadget + '/install';
        const example = this.props.params.gadget + '/example';
        const gadgetTasks = this.props.params.gadget + '/tasks';
        return (
            <div className="app-wrapper gadget">
                <div>
                    <Article article={intro} />
                </div>
                <div>
                    <Article article={install}/>
                    <InstallScript gadget={this.props.params.gadget} />
                </div>
                <div>
                    <Article article='run' />
                </div>
                <div>
                    <Article article='setup' />
                </div>
                <div>
                    <Article article={example}/>
                </div>
                <div>
                    <h2>Tasks</h2>
                    <Tasks gadget={this.props.params.gadget} />
                </div>
            </div>
        )
    }
});
