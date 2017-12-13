import { connect } from 'react-redux'
import Feed from './ui/Feed'
import AddPostForm from './ui/AddPostForm'
import UserProfile from './ui/UserProfile'
import SinglePost from './ui/SinglePost'
import { newPost, ratePost } from '../actions'
import { findById } from '../lib/functions'


export const AddPost = connect(
	state => ({
		user: state.user.name,
		avatar: state.user.avatar
	}),
	dispatch =>
	({
		onNewPost(user, avatar, text) {
                dispatch(newPost(user, avatar, text))
        }
	})
)(AddPostForm)

export const Posts = connect(
    state =>
    ({
       posts: state.posts.sort(function(a, b) {
	    a = new Date(a.timestamp);
	    b = new Date(b.timestamp);
	    return a>b ? -1 : a<b ? 1 : 0; 
		})
    }),
	dispatch =>
	({
		onNewRating(id, rating) {
			dispatch(ratePost(id, rating))
		}
	})
)(Feed)

export const Profile = connect(
	state =>
	({
		name: state.user.name,
		avatar: state.user.avatar
	}),
	null
	)(UserProfile)

export const Post = connect (
	(state, props) => findById(state.posts, props.match.params.id),
	dispatch =>
	({
		onNewRating(id, rating) {
			dispatch(ratePost(id, rating))
		}
	})
	)(SinglePost)