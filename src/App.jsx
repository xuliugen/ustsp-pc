import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { hot } from 'react-hot-loader'
// import DevTools from 'mobx-react-devtools'

import PrivateRoute from 'src/common/PrivateRoute'
import Home from '@/home/Home'
import Login from '@/login/Login'
import ForgetPassword from '@/password/ForgetPassword'
import Register from '@/register/Register'
import Admin from '@/admin/Admin'
import Detail from '@/detail/Detail'
import Search from '@/search/Search'
import NewsDetail from '@/news/NewsDetail'
import AllNews from '@/news/all-news/AllNews'

@withRouter
@inject('msgStore')
@observer
class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    // 当路由切换时
    if (this.props.location !== nextProps.location) {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {
    this.props.msgStore.dispatchGetCounts()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/forget-pwd" component={ForgetPassword} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/admin" component={Admin} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/teacher/:id" component={Detail} />
          <Route path="/student/:id" component={Detail} />
          <Route path="/project/:id" component={Detail} />
          <Route path="/news/:id" component={NewsDetail} />
          <Route path="/ip/:id" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/news" component={AllNews} />
          <Redirect from="/" to="/" />
        </Switch>
        {/* <DevTools /> */}
      </div>
    )
  }
}

export default hot(module)(App)
