/*

reducers receive actions (src/actions.js) via containers (src/components/containers.js) and update the redux store

based on an object's type they use switch logic to determine what to update

in this case the posts reducer is the only reducer that's actually directly updating the store,
when a new post is made, or an existing post is rated, it calls the post reducer, 
and combines that data with existing store data to build the new version of the posts part of the store

the user reducer is combined with the post reducer by the store by the storeFactory (src/store/storeFactory.js) to instantiate the store

*/

import S from '../constants'

export const post = (state = {}, action={ type: null }) => {
	switch (action.type) {
		case S.NEW_POST:
			return {
				id: action.id,
				postId: action.postId,
				user: action.user,
				avatar: action.avatar,
				text: action.text,
				rating: action.rating,
				timestamp: action.timestamp
			}
		case S.RATE_POST:
			return (state.id !== action.id) ? state : {
				...state,
				rating: action.rating
			}
		default:
			return state
	}
}

export const posts = (state = [], action={ type: null }) => {
    switch (action.type) {
        case S.NEW_POST:
            return [
                ...state,
                post({}, action)
            ]
        case S.RATE_POST:
            return state.map(
                item => post(item, action)
            )
        default:
            return state
    }
}

export const user = (state = {}, action={ type: null }) => {
	switch (action.type) {
		default:
			return state
	}
}