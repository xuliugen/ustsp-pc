import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'

@inject('userStore')
@observer
export default class PrivateRoute extends React.Component {
  render() {
    const { userStore, ...restProps } = this.props
    if (userStore.isLogin) {
      return <Route {...restProps} />
    } else {
      message.error('请先登录')
      return <Redirect to="/login" />
    }
  }
}
