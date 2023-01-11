import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DashboardMain from './views/dashboard-main'
import LoginForm from './views/login-form'
import PayStreams from './views/pay-streams'
import PayLinks from './views/pay-links'
import Home from './views/home'
import Invoices from './views/invoices'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DashboardMain} exact path="/dashboard-main" />
        <Route component={LoginForm} exact path="/login-form" />
        <Route component={PayStreams} exact path="/pay-streams" />
        <Route component={PayLinks} exact path="/pay-links" />
        <Route component={Home} exact path="/" />
        <Route component={Invoices} exact path="/invoices" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
