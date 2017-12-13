import React from 'react'
import PropTypes from 'prop-types'
import { AddPost } from '../containers'
import FavButton from './FavButton'
import NahButton from './NahButton'
import AvatarImage  from './AvatarImage'
import { submitFav, submitNah } from '../../lib/functions'



const SinglePost = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f, match}) => {

	const submitF = () => submitFav(rating, id, onNewRating)
	const submitN = () => submitNah(rating, id, onNewRating)
    return (
        <section id={id} className='post border-b'>
        
            <div className='padding-m bg-bright'>
	            <div className='single-avatar float-l'>
		            <AvatarImage avatarName={avatar} />
		            <a href={link}>{user}</a>
	            </div>
	            <div className='single-content float-l'>
	                <div className='post-text font-lg nah-none'>
	                    {text}
	                </div>
	                <div className='margin-t-s font-sm flex-container'>
	                    <div className='height-ml block nah-none'></div>
	                    <div className='margin-sides-xxs flex-center flex-grow nah-none'></div>
	                    <div className='flex-center flex-right margin-sides-m cursor-pointer nah-none' onClick={submitF}><FavButton /></div>
	                    <div className='flex-center cursor-pointer flex-right' onClick={submitN}><NahButton /></div>
	                </div>
	            </div>
	            <div className='clearfix'></div> 

            </div>

            <AddPost postId={match.params.id} />
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
