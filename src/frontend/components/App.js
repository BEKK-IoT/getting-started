import React from 'react';
import { Link } from 'react-router';
import { GADGETS, GENERAL_TASKS } from '../constants/AppConstants';
import Gadget from './Gadget';
import Tasks from './Tasks';
import Keys from './Keys';

function getAllTasks(generalTask, gadgets) {
    let gadgetsTask = [];
    gadgets.map(gadget => {
	console.log(GADGETS[gadget].tasks);
	gadgetsTask = gadgetsTask.concat(GADGETS[gadget].tasks);
    })
    gadgetsTask = gadgetsTask.concat(GENERAL_TASKS);
    return gadgetsTask;
}

module.exports = React.createClass({
    render() {
        const gadgets = Object.keys(GADGETS);
	    const tasks = getAllTasks(GENERAL_TASKS, gadgets);
        return (
            <div>
                <div className="app-content">
                    <h1>Getting started!</h1>
                    {gadgets.map(gadget =>
                        <ul key={gadget}><Link to={'device/' + gadget}>{GADGETS[gadget].name}</Link></ul>
                    )}
                    <ul><Link to={'keys/'}>Mac keybindings</Link></ul>
                </div>
                <div>
                    <h1>Tasks</h1>
                    <Tasks tasks={GADGETS['arduino'].tasks} /><br/>
                    <Tasks tasks={GADGETS['photon'].tasks} />
                </div>
		<h2 className='feedback'><a target='_blank' href='https://docs.google.com/forms/d/1ioEILHN1DucUdxUqF6sheu7twzxsVFnuwIx3fqK0-NE/viewform'>Feedback</a></h2>
            </div>
        )
    }
});
