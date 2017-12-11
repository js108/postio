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