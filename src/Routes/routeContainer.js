import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import SearchContainer  from '../Containers/SearchContainer/searchContainer'



const RouteContainer = () => (
  <div className="h-100">
      <Switch>
        <PrivateRoute exact path='/search' component={SearchContainer} />
      </Switch>
  </div>
)


export default RouteContainer;