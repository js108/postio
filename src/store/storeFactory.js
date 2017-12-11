import { createStore, combineReducers } from 'redux'
import { posts, user } from './reducers'
import stateDate from '../data/initialState'
import { composeWithDevTools } from 'redux-devtools-extension'


const storeFactory = (initialState=stateDate) => 
	createStore(combineReducers({posts, user}), initialState /*, composeWithDevTools()*/)


export default storeFactory


