import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import SearchContainer  from '../Containers/SearchContainer/searchContainer'
import ReportsContainer from '../Containers/ReportsContainer/reportsContainer'



const RouteContainer = () => (
  <div className="h-100">
      <Switch>
        <PrivateRoute exact path='/search' component={SearchContainer} />
        <PrivateRoute exact path='/reports' component={ReportsContainer} />
      </Switch>
  </div>
)


export default RouteContainer;