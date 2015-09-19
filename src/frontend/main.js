import React from 'react';
import { Router, Route, Link } from 'react-router';

import Gadget from './components/Gadget';
import App from './components/App';

const routes = (
	<Router>
		<Route path="/" component={App}>
		</Route>
			<Route path="/:gadget" component={Gadget} />
	</Router>
);

React.render(routes, document.getElementById('app'));