import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

/**Containers for routing */
import NavBarContainer from './Containers/NavBarContainer/navBarContainer'
import LandingPageContainer from './Containers/LandingPageContainer/landingContainer'
import RouteContainer from './Routes/routeContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app-container">
        <NavBarContainer/>
        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <RouteContainer/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
