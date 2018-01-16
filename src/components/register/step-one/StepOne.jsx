import React from 'react'
import './stepOne.css'
import { observer, inject } from 'mobx-react'

import RegForm from './reg-form/RegForm'

@inject('registerStore')
@observer
export default class StepOne extends React.Component<{}> {
  componentWillMount() {
    this.props.registerStore.changeStep(1)
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="title">step 1 : 填写基本信息</div>
        <RegForm />
      </div>
    )
  }
}
