import React from 'react'
import PropTypes from 'prop-types'
import { Posts, AddPost } from '../containers'
import FavButton from './FavButton'
import NahButton from './NahButton'
import AvatarImage  from './AvatarImage'
import SinglePost from './SinglePost'
import { submitFav, submitNah } from '../../lib/functions'



const SinglePostPage = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f, match}) => {

    return (
        <section className='single-post-page'>
        
           <SinglePost id={id} user={user} avatar={avatar} text={text} rating={rating} link={link} onNewRating={onNewRating} />

            <div className='single-content float-r comments'>
	            <Posts postId={match.params.id} />
	            <AddPost postId={match.params.id} />
            </div>
        </section>
    )

}

SinglePostPage.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    onNewRating: PropTypes.func.isRequired
}

export default SinglePostPage
