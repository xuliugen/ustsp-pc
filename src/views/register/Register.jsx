import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { RegisterHeader, StepOne, StepTwo, StepThree } from 'components/register'
import { Footer } from 'components/common'
import './register.css'

export default class Register extends React.Component<{}> {
  render() {
    const { match } = this.props
    return (
      <div styleName="register">
        <RegisterHeader />
        <Switch>
          <Route path={`${match.url}/1`} component={StepOne} />
          <Route path={`${match.url}/2`} component={StepTwo} />
          <Route path={`${match.url}/3`} component={StepThree} />
        </Switch>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
