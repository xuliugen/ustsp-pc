// @flow
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Home from '@/home/Home'
import Login from '@/login/Login'
import Register from '@/register/Register'
import Admin from '@/admin/Admin'

@withRouter
@observer
export default class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    )
  }
}
