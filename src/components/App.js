/*

here you have the template and routing

routing consists of: a home page, 
an address generated dynamically based on the id of a post,
and 404 redirect

the routes are wrapped in the Switch component provided by react-router which iterates over the routes until it finds a match

the Switch component is wrapped in the PageTemplate component (src/components/ui/PageTemplate.js),
so that the template parts of the app wont have to reload every time a new route is called

*/

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './ui/Home'
import Redirect404 from './ui/Redirect404'
import PageTemplate from './ui/PageTemplate'
import { Post } from './containers'


const App = () => {
	return (
		<PageTemplate>
			<Switch>
	            <Route exact path='/' component={Home} />
	            <Route path="/:id" component={Post} />
	            <Route component={Redirect404} />
	        </Switch>
		</PageTemplate>
	)
}

export default App;