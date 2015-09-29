import React from 'react';
import { token, devices } from '../constants/AccessTokens';

module.exports = React.createClass({
	getInitialState: function() {
		return {id: ''};
	},
	handleChange(e) {
		this.setState({id: e.target.value});
	},

	render() {
		const id = this.state.id;
		let info = undefined;
		console.log(devices);

		if (id && devices.hasOwnProperty(id.toUpperCase())) {
			info = (
				<div className="export-token">
					<div>export PHOTON_TOKEN="{token}"</div>
					<div>export PHOTON_DEVICE_ID="{devices[id.toUpperCase()]}"</div>
				</div>
			)
		} else if (id.length >= 4) {
			info = (<div>Could not find device ID</div>)
		}

		return (
			<div>
				<div>
					To be able to use the photon we need to export some environment variables. 
					On the back side of the photon box there should be a serial-number. 
					Type in the last four digits/letters in the box below to get your access tokens.
				</div>
				<div className="token-form">
					<div className="token-form-header">Find your token</div>
					<div><input type="search" value={id} onChange={this.handleChange} placeholder="Enter device ID" /></div>
					<div className="token-form-info">{info}</div>
				</div>
			</div>
		)
	}
});