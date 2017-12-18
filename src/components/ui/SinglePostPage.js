/*

renders a post (SinglePost, src/components/ui/SinglePost.js), its comments (Posts, src/components/containers.js), 
and the form to add a comment (AddPost, src/components/containers.js),
via being wrapped in/reciveing a whole mess of props from the Post container (src/components/containers.js)

there's info about how this works from a redux store perspective in the readme

*/

import React from 'react'
import PropTypes from 'prop-types'
import { Posts, AddPost } from '../containers'
import FavButton from './FavButton'
import NahButton from './NahButton'
import AvatarImage  from './AvatarImage'
import FeedNode from './FeedNode'
import { submitFav, submitNah } from '../../lib/functions'


const SinglePostPage = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f, match}) => {

    return (
        <main className='single-post-page'>
        
           <FeedNode id={id} user={user} avatar={avatar} text={text} rating={rating} link={link} onNewRating={onNewRating} />

            <div className='comments'>
	            <Posts postId={match.params.id} />
	            <AddPost postId={match.params.id} />
            </div>
        </main>
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
