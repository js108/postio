/*

the Feed component receives posts from/is wrapped in the Posts container (src/components/containers.js),
then filters the posts via their postID,
if the postId is the default 'home' they're displayed on the home page in reverse chronological order,
if the postID is an id of another post, received as an prop, they're displayed as comments of that post in chronological order,
there's more info on in this in the readme

props are mapped to the FeedNode component (src/components/ui/FeedNode) to build individual posts

*/

import React from 'react'
import PropTypes from 'prop-types'
import FeedNode from './FeedNode'

const Feed = ({ posts=[], onNewRating=f=>f, postId='home'}) => {

   const filteredPosts = posts.filter(item => item.postId === postId).sort((a, b) => {
            a = new Date(a.timestamp);
            b = new Date(b.timestamp);
            return a>b ? -1 : a<b ? 1 : 0;
             })

   const sortedPosts = postId === 'home' ? filteredPosts : filteredPosts.reverse()
    

    return (
        <div className='feed'>
            {sortedPosts.map(post =>
                    <FeedNode key={post.id}
                        {...post}
                        onNewRating={(id, rating) => onNewRating(post.id, rating)}
                      />
                )}
        </div>
    )
}

Feed.propTypes = {
    posts: PropTypes.array,
}

export default Feed

/*

.filter(item => item.postId === postID).sort((a, b) => {
            a = new Date(a.timestamp);
            b = new Date(b.timestamp);
            return a>b ? -1 : a<b ? 1 : 0; 
        })

*/