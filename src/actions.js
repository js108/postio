import S from './constants'
import { v4 } from 'uuid'

export const newPost = (user, avatar, text) =>
	({
		type: S.NEW_POST,
		id: v4(),
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