import { connect } from 'react-redux'
import Feed from './ui/Feed'
import AddPostForm from './ui/AddPostForm'
import UserProfile from './ui/UserProfile'
import SinglePostPage from './ui/SinglePostPage'
import { newPost, ratePost } from '../actions'
import { findById, findByPostId } from '../lib/functions'


export const AddPost = connect(
	state => ({
		user: state.user.name,
		avatar: state.user.avatar
	}),
	dispatch =>
	({
		onNewPost(postId, user, avatar, text) {
                dispatch(newPost(postId, user, avatar, text))
        }
	})
)(AddPostForm)

export const Posts = connect(

	 state =>
    ({
		posts: state.posts
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
	)(SinglePostPage)