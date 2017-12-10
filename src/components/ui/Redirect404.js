import React from 'react';

const Redirect404 = ({ location }) => {
	return (
		<div>
        	<h1>Whoops cannot find the page '{location.pathname}'</h1>
    	</div>
	);
}

export default Redirect404
