import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './privateRoute'

import SearchContainer  from '../Containers/SearchContainer/searchContainer'
import ReportsContainer from '../Containers/ReportsContainer/reportsContainer'
import ReportsContent from '../Containers/ReportsContainer/reportsContent'
import PageNotFound from '../Containers/pageNotFound'


const RouteContainer = () => (
  <div className="h-100">
      <Switch>
        <PrivateRoute exact path='/search' component={SearchContainer} />
        <PrivateRoute exact path='/reports' component={ReportsContainer} />
        <PrivateRoute exact path='/reports/view' component={ReportsContent} />
        <Route exact path="/*" component={PageNotFound} />
      </Switch>
  </div>
)


export default RouteContainer;