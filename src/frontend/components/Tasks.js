import React from 'react';
import {GADGETS} from '../constants/AppConstants';
import Article from './Article';
import { Link } from 'react-router';

module.exports = React.createClass({
    render() {
        const { tasks } = GADGETS[this.props.gadget];
        return (
        	<div>
        		{tasks.map(task => 
        			<ul key={task}><Link to={'task/' + task}>{task}</Link></ul>)
        		}
        	</div>
        )
    }
});