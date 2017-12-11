import React from 'react'
import PropTypes from 'prop-types'
import FavButton from './FavButton'
import NahButton from './NahButton'
import AvatarImage  from './AvatarImage'
import { Link } from 'react-router-dom'

const FeedNode = ({id='', user='', avatar='', text='', rating=0, link='', onNewRating=f=>f}) => {

    const submitFav = (e) => {
        switch (rating) {
            case 0:
                rating = 1,
                addFavStyles(),
                onNewRating(id, rating)
                break
            case 1:
                rating = 0,
                removeFavStyles(),
                onNewRating(id, rating)
                break
            case 2:
                rating = 1,
                addFavStyles(),
                removeNahStyles(),
                onNewRating(id, rating)
                break
            default:
                rating = 1,
                addFavStyles(),
                removeNahStyles(),
                onNewRating(id, rating)
        }
        e.preventDefault()
    }

    const submitNah = (e) => {
        switch (rating) {
            case 0:
                rating = 2,
                addNahStyles(),
                onNewRating(id, rating)
                break
            case 1:
                rating = 2,
                addNahStyles(),
                removeFavStyles(),
                onNewRating(id, rating)
                break
            case 2:
                rating = 0,
                removeNahStyles(),
                onNewRating(id, rating)
                break
            default:
                rating = 2,
                addNahStyles(),
                removeFavStyles(),
                onNewRating(id, rating)
        }
        e.preventDefault()
    }

    const addFavStyles = () => {
        const post = document.getElementById(id);
        post.classList.add('faved');
        console.log('post', post)
    }

    const removeFavStyles = () => {
        const post = document.getElementById(id);
        post.classList.remove('faved');
        //console.log(post)
    }

    const addNahStyles = () => {
        const post = document.getElementById(id);
        post.classList.add('nahed');
        //console.log(post)
    }

    const removeNahStyles = () => {
        const post = document.getElementById(id);
        post.classList.remove('nahed');
        //console.log(post)
    }

    return (
        <section id={id} className='post border-b'>
            <div className='padding-m'>
                <div className='post-text font-lg nah-none'>
                    {text}
                    
                </div>
                <div className='margin-t-s font-sm flex-container'>
                    <div className='height-ml block nah-none'><AvatarImage avatarName={avatar} /></div>
                    <div className='margin-sides-xxs flex-center flex-grow nah-none'><a href={link}>{user}</a></div>
                    <div className='flex-center flex-right margin-sides-m cursor-pointer'><Link to={id}>comment</Link></div>
                    <div className='flex-center flex-right margin-sides-m cursor-pointer nah-none' onClick={submitFav}><FavButton /></div>
                    <div className='flex-center cursor-pointer flex-right' onClick={submitNah}><NahButton /></div>
                </div>
            </div>
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
