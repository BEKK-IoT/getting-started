import React from 'react';
import { Router, Route, Link } from 'react-router';

import Article from './components/Article';
import App from './components/App';

const routes = (
	<Router>
		<Route path="/" component={App}>
		</Route>
			<Route path="/:gadget" component={Article} />
	</Router>
);

React.render(routes, document.getElementById('app'));