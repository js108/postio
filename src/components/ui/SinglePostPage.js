/*

renders a post (FeedNode, src/components/ui/FeedNode.js), its comments (Posts, src/components/containers.js), 
and the form to add a comment (AddPost, src/components/containers.js),
via being wrapped in/reciveing a whole mess of props from the Post container (src/components/containers.js)

there's info about how this works from a redux store perspective in the readme

*/

import React from 'react'
import PropTypes from 'prop-types'
import { Posts, AddPost } from '../containers'
import FeedNode from './FeedNode'

const SinglePostPage = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f}) => {

    return (
        <div className='single-post-page grid'>
            <div className='single-post grid--full-width'>
                <FeedNode id={id} user={user} avatar={avatar} text={text} rating={rating} link={link} onNewRating={onNewRating} />
            </div>
            <div className='grid--r'>
	            <Posts postId={id} />
	            <AddPost postId={id} />
            </div>
        </div>
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
