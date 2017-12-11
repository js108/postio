import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './ui/Home'
import SinglePost from './ui/SinglePost'
import Redirect404 from './ui/Redirect404'
import PageTemplate from './ui/PageTemplate'

const App = () => {
	return (
		<PageTemplate>
			<Switch>
	            <Route exact path='/' component={Home} />
	            <Route path="/:id" component={SinglePost} />
	            <Route component={Redirect404} />
	        </Switch>
		</PageTemplate>
	)
}

export default App;