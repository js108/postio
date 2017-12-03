import React, { Component } from 'react';
import { Profile, Post, Posts } from './containers'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <div className='center max-width'>
            <div className='margin-sides-m'>
              <h1>Postio</h1>
            </div>
          </div>
        </header>
        <main>
          
          <div className='center max-width'>
            <div className='margin-m'>
              <div className='sidebar float-l'>
                <Profile />
              </div>
              <div className='mainbar float-l'>
                <Post />
                <Posts />
              </div>
              <div className='clearfix'></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;