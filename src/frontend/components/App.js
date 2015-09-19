import React from 'react';
import { Link } from 'react-router';
import Gadget from './Gadget';

module.exports = React.createClass({
    render() {
        return (
            <div className="app-wrapper">
                <ul>
                    <h1>Welcome!</h1>
                    <li><Link to="/arduino">Arduino</Link></li>
                    <li><Link to="/rpi">Raspberry Pi</Link></li>
                    <li><Link to="/photon">Photon</Link></li>
                </ul>
            </div>
        )
    }
});