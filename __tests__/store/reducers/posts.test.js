import S from '../../../src/constants'
import { posts } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe("posts reducer", () => {

    it("NEW_POST success", () => {
    	const state = [{
            id: 1,
            user: 'test human',
            avatar: 'test-human.jpg',
            text: 'i am posting, its problem?',
            timestamp: 6,
            rating: 2
        }]
    	const action = {
	    	type: S.NEW_POST,
			id: 0,
			user: 'test guy',
			avatar: 'test-guy.jpg',
			text: 'i am posting, problem?',
			rating: 0,
			timestamp: new Date().toString()
    	}
        deepFreeze(state)
        deepFreeze(action)
    	const results = posts(state, action)
    	expect(results).toEqual([{
            id: 1,
            user: 'test human',
            avatar: 'test-human.jpg',
            text: 'i am posting, its problem?',
            timestamp: 6,
            rating: 2
        },
        {
    		id: 0,
			user: 'test guy',
			avatar: 'test-guy.jpg',
			text: 'i am posting, problem?',
			rating: 0,
			timestamp: action.timestamp
    	}])
    })

    it("RATE_POST success", () => {
    	const state = [{
            id: 0,
            user: 'test guy',
            avatar: 'test-guy.jpg',
            text: 'i am posting, problem?',
            timestamp: 5,
            rating: undefined
            },
            {
            id: 1,
            user: 'test human',
            avatar: 'test-human.jpg',
            text: 'i am posting, its problem?',
            timestamp: 6,
            rating: 2
        }]
    	const action = {
    		type: S.RATE_POST,
    		id: 0,
    		rating: 1
    	}
        deepFreeze(state)
        deepFreeze(action)
    	const results = posts(state, action)
    	expect(results).toEqual([{
    		id: 0,
			user: 'test guy',
			avatar: 'test-guy.jpg',
			text: 'i am posting, problem?',
			timestamp: 5,
			rating: 1
    	},
        {
            id: 1,
            user: 'test human',
            avatar: 'test-human.jpg',
            text: 'i am posting, its problem?',
            timestamp: 6,
            rating: 2
        }])
    })

})