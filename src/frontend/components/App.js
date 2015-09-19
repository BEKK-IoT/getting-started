import React from 'react';
import { Link } from 'react-router';
import Gadget from './Gadget';
import { GADGETS } from '../constants/AppConstants';

module.exports = React.createClass({
    render() {
        const gadgets = Object.keys(GADGETS);
        const links = gadgets.map(gadget => <li><Link to={gadget}>{GADGETS[gadget].name}</Link></li>)
        return (
            <div className="app-wrapper">
                <ul>
                    <h1>Welcome!</h1>
                    {links}
                </ul>
            </div>
        )
    }
});