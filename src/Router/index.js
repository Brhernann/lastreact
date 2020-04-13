import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../views/Authentication/Login'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/NotFound/index'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
