import React from 'react'
import { Switch, Route } from 'react-router-dom'

// todo: 更好的路由
import { Home, NewDemand } from 'components/admin'

export default class Admin extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div>
        {/* <Header /> */}
        {/* <Sider /> */}
        <Switch>
          <Route exact path={`${match.url}/`} component={Home} />
          <Route path={`${match.url}/new-demand`} component={NewDemand} />
        </Switch>
      </div>
    )
  }
}
