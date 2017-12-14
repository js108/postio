/*

an svg written as a component in order to be able to manipulate its atributes with css

*/

import React from 'react'

const CommentButton = () => {

	return (
	      <svg version="1.1" className='height-ml' id="Layer_1" x="0px" y="0px"
	     viewBox="0 0 612 612">
			<g>
			    <path className='comment-svg' fill='#ff0000' d="M306,0C137,0,0,119.9,0,267.8c0,84.5,44.8,159.8,114.8,208.8V612l134-81.3c18.6,3.1,37.6,4.8,57.2,4.8
				c169,0,306-119.9,306-267.8S475,0,306,0z"/>
			</g>
		</svg>
	)
}
export default CommentButton
