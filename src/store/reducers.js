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