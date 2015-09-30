import React from 'react';
import { Link } from 'react-router';
import { GADGETS } from '../constants/AppConstants';
import Gadget from './Gadget';
import Tasks from './Tasks';

function getAllTasks(gadgets) {
    return Object.keys(gadgets)
        .map(gadget => gadgets[gadget].tasks)
        .reduce((allTasks, tasks) => {
            tasks.forEach(t => allTasks.push(t));
            return allTasks;
        } , []);
}

module.exports = React.createClass({
    render() {
        const gadgets = Object.keys(GADGETS);
        return (
            <div>
                <div className="app-content">
                    <h1>Getting started!</h1>
                    {gadgets.map(gadget => 
                        <ul key={gadget}><Link to={'device/' + gadget}>{GADGETS[gadget].name}</Link></ul>
                    )}
                </div>
                <div>
                    <h1>Tasks</h1>
                    {gadgets.map(gadget => <Tasks gadget={gadget} />)}
                </div>
            </div>
        )
    }
});