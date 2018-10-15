import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import SearchContainer  from '../Containers/SearchContainer/searchContainer'
import ReportsContainer from '../Containers/ReportsContainer/reportsContainer'
import ReportsContent from '../Containers/ReportsContainer/reportsContent'



const RouteContainer = () => (
  <div className="h-100">
      <Switch>
        <PrivateRoute exact path='/search' component={SearchContainer} />
        <PrivateRoute exact path='/reports' component={ReportsContainer} />
        <PrivateRoute exact path='/reports/view' component={ReportsContent} />
      </Switch>
  </div>
)


export default RouteContainer;