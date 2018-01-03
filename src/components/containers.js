/*

these are the container components where redux communicates with all the stateless react components using redux's connect function

connect has two methods: state which passes state to react, 
and dispatch which receives data from react and passes it to the store via actions and reducers

the components defined here are kinda the parent components for the whole app, 
then their children are passed as props at the end of each declaration,
eg AddPostForm (src/components/ui/AddPostForm.js) is the child of AddPost,
you can see it in the last parentheses of the AddPost function

*/

import { connect } from 'react-redux'
import Feed from './ui/Feed'
import AddPostForm from './ui/AddPostForm'
import UserProfile from './ui/UserProfile'
import SinglePostPage from './ui/SinglePostPage'
import { newPost, ratePost } from '../actions'
import { findById } from '../lib/functions'

export const AddPost = connect(
	state => ({
		user: state.user.name,
		avatar: state.user.avatar
	}),
	dispatch => ({
		onNewPost(postId, user, avatar, text) {
                dispatch(newPost(postId, user, avatar, text))
        }
	})
)(AddPostForm)

export const Posts = connect(
	state => ({
		posts: state.posts
    }),
	dispatch => ({
		onNewRating(id, rating) {
			dispatch(ratePost(id, rating))
		}
	})
)(Feed)

export const Profile = connect(
	state => ({
		name: state.user.name,
		avatar: state.user.avatar
	}),
	null
)(UserProfile)

export const Post = connect (
	(state, props) => findById(
		state.posts, props.match.params.id
	),
	dispatch => ({
		onNewRating(id, rating) {
			dispatch(ratePost(id, rating))
		}
	})
)(SinglePostPage)