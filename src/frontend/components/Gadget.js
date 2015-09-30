import React from 'react';
import Article from './Article';
import Tasks from './Tasks';
import InstallScript from './InstallScript';
import PhotoAccessToken from './PhotoAccessToken';

module.exports = React.createClass({
    render() {
        const intro = this.props.params.gadget + '/intro';
        const install = this.props.params.gadget + '/install';
        const example = this.props.params.gadget + '/example';
        const gadgetTasks = this.props.params.gadget + '/tasks';
        const getToken = this.props.params.gadget === 'photon' ? <PhotoAccessToken/> : null;
        return (
            <div className="gadget">
                <div>
                    <Article article={intro} />
                </div>
                <div>
                    <Article article={install}/>
                    <InstallScript gadget={this.props.params.gadget} />
                    {getToken}
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
