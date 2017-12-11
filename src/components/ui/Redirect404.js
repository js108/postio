import React from 'react';

const Redirect404 = ({ location }) => {
	return (
		<div>
        	<h1>Oop cannot find the page '{location.pathname}'</h1>
    	</div>
	)
}

export default Redirect404
