/*

actions interact with reducers (src/store/reducers) and containers (src/components/containers) to manage state,
eg when the AddPost container dispatches the newPost function defined here it passes postId, user, avatar, and text props,
then the newPost function generates the type, id, rating, timestamp, and link values itself,
then the object is run through a reducer's logic and based on its type it updates the parts of the store that need updating

the constants imported here are string literals used in defense against typo bugs,
you could just put the string directly in the type value but it's a little safer this way

*/

import S from './constants'
import { v4 } from 'uuid'

export const newPost = (postId, user, avatar, text) =>
	({
		type: S.NEW_POST,
		id: v4(),
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
