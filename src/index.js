/* 

here it is the app itself

the redux store is instantiated by calling the storeFactory function (src/store/storeFactory.js)

window.React and window.store put react and the redux store into the global window scope for routing purposes

the App component is wrapped in the HashRouter component provided by react-router to do routing,
then that is wrapped in the Provider component which connects redux to react,
then the whole thing is rendered by react

*/

import React from 'react';
import  { render }  from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './components/App';
import storeFactory from './store/storeFactory'
import './styles/styles.css';

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
    	<HashRouter>
          <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

