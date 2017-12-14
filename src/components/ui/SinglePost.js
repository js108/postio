/*

renders a single post and has post rating functionality

ill prob try to move this functionality over to FeedNode for maximum modularity/reusability

*/

import React from 'react'
import PropTypes from 'prop-types'
import FavButton from './FavButton'
import NahButton from './NahButton'
import AvatarImage  from './AvatarImage'
import { submitFav, submitNah } from '../../lib/functions'



const SinglePost = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f}) => {

	const submitF = () => submitFav(rating, id, onNewRating)
	const submitN = () => submitNah(rating, id, onNewRating)

    return (
        <section id={id} className='post single-post'>
        
            <div className='padding-m bg-bright border-b'>
	            <div className='single-avatar float-l nah-none'>
			            <AvatarImage avatarName={avatar} />
			            <a href={link}>{user}</a>
	            </div>
	            <div className='single-content float-l'>
	                <div className='post-text font-lg nah-none'>
	                    {text}
	                </div>
	                <div className='margin-t-s font-sm flex-container'>
	                    <div className='height-ml block'>
	                    	<div className='nested-diplpay-n nah-none'><AvatarImage avatarName={avatar} /></div>
	                    </div>
                    	<div className='margin-sides-xxs flex-center flex-grow'>
                    		<div className='nested-diplpay-n nah-none'><a href={link}>{user}</a></div>
                    	</div>
	                    <div className='flex-center flex-right margin-sides-m cursor-pointer nah-none' onClick={submitF}><FavButton /></div>
	                    <div className='flex-center cursor-pointer flex-right' onClick={submitN}><NahButton /></div>
	                </div>
	            </div>
	            <div className='clearfix'></div> 

            </div>
        </section>
    )

}

SinglePost.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    onNewRating: PropTypes.func.isRequired
}

export default SinglePost
