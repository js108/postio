import S from './constants'
import { v4 } from 'uuid'

export const newPost = (postId, user, avatar, text) =>
	({
		type: S.NEW_POST,
		id: 'post-' + v4(),
		postId,
		user,
		avatar,
		text,
		rating: 0,
		timestamp: new Date().toString(),
		link: ''
	})

export const ratePost = (id, rating) =>
	({
		type: S.RATE_POST,
		id,
		rating
	})
