import React from 'react'
import PropTypes from 'prop-types'
import FeedNode from './FeedNode'

const Feed = ({ posts=[], onNewRating=f=>f, postId='home'}) => {

   const filteredPosts = posts.filter(item => item.postId === postId)
   const sortedPosts = postId !== 'home' ? filteredPosts : filteredPosts.sort((a, b) => {
            a = new Date(a.timestamp);
            b = new Date(b.timestamp);
            return a>b ? -1 : a<b ? 1 : 0; 
        })
    

    return (
        <div className='feed bg-bright'>
            {(filteredPosts.length === 0) ?
                <p>There's no posts.</p> :
                filteredPosts.map(post =>
                    <FeedNode key={post.id}
                        {...post}
                        onNewRating={(id, rating) => onNewRating(post.id, rating)}
                      />
                )
            }
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