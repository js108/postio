import React from 'react';
import Header from './ui/Header'
import MainWithRoutes from './ui/MainWithRoutes'

const App = () => {
  return (
    <div className='app'>
		<Header />
		<MainWithRoutes />
    </div> 
  );
}

export default App;