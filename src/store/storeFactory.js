/*

the store factory combines the post and user reducers to instante the store at index.js (src/index.js)

i need to set up my dev env a lil better im just commenting out redux dev tools before pushing to production tsk tsk
redux dev tools is super hand btw it lets u see the state in your browser's dev tools + other cool stuff

*/


import { createStore, combineReducers } from 'redux'
import { posts, user } from './reducers'
import stateDate from '../data/initialState'
//import { composeWithDevTools } from 'redux-devtools-extension'


const storeFactory = (initialState=stateDate) => 
	createStore(combineReducers({posts, user}), initialState /*, composeWithDevTools()*/)


export default storeFactory


