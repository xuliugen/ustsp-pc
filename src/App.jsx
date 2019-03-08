import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { hot } from 'react-hot-loader'
// import DevTools from 'mobx-react-devtools'

import PrivateRoute from 'src/common/PrivateRoute'
import { ModalButton } from 'components/common'
import asyncComponent from 'src/common/AsyncComponent'

import Home from '@/home/Home'
import Login from '@/login/Login'
import ForgetPassword from '@/password/ForgetPassword'
import Register from '@/register/Register'
// import AllNews from '@/news/all-news/AllNews'
// import Detail from '@/detail/Detail'
// import Search from '@/search/Search'
// import NewsDetail from '@/news/NewsDetail'
// import Admin from '@/admin/Admin'
const AsyncAdmin = asyncComponent(() => import('@/admin/Admin'))
const AsyncNewsDetail = asyncComponent(() => import('@/news/NewsDetail'))
const AsyncDetail = asyncComponent(() => import('@/detail/Detail'))
const AsyncSearch = asyncComponent(() => import('@/search/Search'))
const AsyncAllNews = asyncComponent(() => import('@/news/all-news/AllNews'))

@withRouter
@inject('msgStore', 'userStore')
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
    this.props.userStore.checkIfInfoCompleted()
  }

  render() {
    const feedbackStyle = {
      position: 'fixed',
      right: '10px',
      bottom: '10px'
    }
    return (
      <div style={{ position: 'relative' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/forget-pwd" component={ForgetPassword} />
          <Route path="/register" component={Register} />
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
          <PrivateRoute path="/admin" component={AsyncAdmin} />
          <Route path="/teacher/:id" component={AsyncDetail} />
          <Route path="/student/:id" component={AsyncDetail} />
          <Route path="/project/:id" component={AsyncDetail} />
          <Route path="/news/:id" component={AsyncNewsDetail} />
          <Route path="/ip/:id" component={AsyncDetail} />
          <Route path="/enterprise/:id" component={AsyncDetail} />
          <Route path="/manager/:id" component={AsyncDetail} />
          <Route path="/search" component={AsyncSearch} />
          <Route path="/news" component={AsyncAllNews} />
          <Redirect from="/" to="/" />
        </Switch>
        {/* <DevTools /> */}
        <div style={feedbackStyle}>
          <ModalButton />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
