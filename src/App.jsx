import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { hot } from 'react-hot-loader'
// import DevTools from 'mobx-react-devtools'

// import PrivateRoute from 'src/common/PrivateRoute'

import Home from '@/home/Home'
import Login from '@/login/Login'
import Register from '@/register/Register'
import Admin from '@/admin/Admin'
import Detail from '@/detail/Detail'
import Search from '@/search/Search'
import NewsDetail from '@/news/NewsDetail'

@withRouter
@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
          <Route path="/admin" component={Admin} />
          <Route path="/teacher/:id" component={Detail} />
          <Route path="/student/:id" component={Detail} />
          <Route path="/project/:id" component={Detail} />
          <Route path="/news/:id" component={NewsDetail} />
          <Route path="/search" component={Search} />
          <Redirect from="/" to="/" />
        </Switch>
        {/* <DevTools /> */}
      </div>
    )
  }
}

export default hot(module)(App)
