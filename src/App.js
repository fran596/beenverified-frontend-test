import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

/**Containers for routing */
import NavBarContainer from './Containers/NavBarContainer/navBarContainer'
import LandingPageContainer from './Containers/LandingPageContainer/landingContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app-container">
        <NavBarContainer/>
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
