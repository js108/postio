/*

a single post in the feed

it receives a ton of props from the Feed component (src/components/ui/Feed.js) via the Posts container (src/components/containers.js),
and has post rating functionality

*/

import React from 'react'
import PropTypes from 'prop-types'
import FavButton from './FavButton'
import NahButton from './NahButton'
import CommentButton from './CommentButton'
import AvatarImage  from './AvatarImage'
import { Link } from 'react-router-dom'
import { submitFav, submitNah } from '../../lib/functions'

const FeedNode = ({id='', user='', avatar='', text='', rating=0, link='', timestamp='', onNewRating=f=>f}) => {

    const submitF = () => submitFav(rating, id, onNewRating)
    const submitN = () => submitNah(rating, id, onNewRating)

    return (
        <section id={id} className='post border-b bg-bright padding-m'>
            <div className='post-text font-lg nah-none'>{text}</div>
            <div className='height-ml block nah-none'><AvatarImage avatarName={avatar} /></div>
            <div className='margin-sides-xxs nah-none'><a href={link}>{user}</a></div>
            <div className='cursor-pointer nah-none'><Link to={id}><CommentButton /></Link></div>
            <div className='cursor-pointer nah-none' onClick={submitF}><FavButton /></div>
            <div className='cursor-pointer' onClick={submitN}><NahButton /></div>
        </section>
    )

}

FeedNode.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    onNewRating: PropTypes.func.isRequired
}

export default FeedNode
