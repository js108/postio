import storeFactory from '../src/store/storeFactory'
import { newPost, ratePost } from '../src/actions'

describe('newPost', () => {
	let store
	const posts = [
		{
	      "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
	      "user": "UtilityLimb",
	      "avatar": "bandit.png",
	      "text": "Programming Skills: PRIMARILY RUBY AND PYTHON BUT I CAN USE ANY TYPE OF GEM TO CONTROL ANY TYPE OF SNAKE",
	      "rating": 0,
	      "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
	    },
	    {
	      "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
	      "user": "conortripler",
	      "avatar": "connor.jpg",
	      "text": "*sits 27 hours for an oil on canvas portrait* omg delete that. Bartholomew i'm serious do not fucking hang that in the Great Hall",
	      "rating": 0,
	      "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
	    }
	]

	beforeAll(() => {
		store = storeFactory({posts})
		store.dispatch(newPost('test user', 'testAvatar.jpg', 'test text bro'))
		store.dispatch(ratePost('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 1))
	})

	it('should add a new post', () =>
		expect(store.getState().posts.length).toBe(3)
	)

	it('should rate a post', () =>
		expect(store.getState().posts[0].rating).toBe(1)
	)

})