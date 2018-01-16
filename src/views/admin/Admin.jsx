import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Demand, Mgnt } from 'components/admin'

export default class Admin extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div>
        {/* <Header /> */}
        {/* <Sider /> */}
        <Switch>
          <Route exact path={`${match.url}/`} component={Home} />
          <Route path={`${match.url}/demand`} component={Demand} />
          <Route path={`${match.url}/mgnt`} component={Mgnt} />
        </Switch>
      </div>
    )
  }
}
