import React from 'react'
import PropTypes from 'prop-types'
import FeedNode from './FeedNode'

const Feed = ({ posts=[], onNewRating=f=>f}) =>
    <div className='feed bg-bright'>
        {(posts.length === 0) ?
            <p>There's no posts.</p> :
            posts.map(post =>
                <FeedNode key={post.id}
                    {...post}
                    onNewRating={(id, rating) => onNewRating(post.id, rating)}
                  />
            )
        }
    </div>

Feed.propTypes = {
    posts: PropTypes.array,
}

export default Feed