import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
//import the404 from './ui/the404'

const MainWithRoutes = () => {
  return (
      <main className='center max-width'>
        <div className='margin-m'>
          <Home />
        </div>
      </main>
  );
}

/*
const App = () =>
    <Switch>
        <Route exact path="/:id" component={SinglePost} />
        <Route path="/"
            component={() => (
                <div className="app">
                    <Route component={Menu} />
                    <NewColor />
                    <Switch>
                        <Route exact path="/" component={Colors} />
                        <Route path="/sort/:sort" component={Colors} />
                        <Route component={Whoops404} />
                    </Switch>
                </div>
            )} />
    </Switch>

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

          </div>
        </main>
      </div>
    );
  }
}
*/

export default MainWithRoutes;