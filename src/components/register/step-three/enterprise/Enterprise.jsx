import React from 'react'
import './enterprise.css'
import { Form } from 'antd'

import EnterBaseInfo from './base-info/EnterBaseInfo'
import EnterOtherInfo from './other-info/EnterOtherInfo'

class StepThreeEnterprise extends React.Component<{}> {
  render() {
    return (
      <div styleName="container" className="element-container" >
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <Form layout="vertical">
            <EnterBaseInfo form={this.props.form} />
            <EnterOtherInfo />
            <div styleName="confirm-btn">
              <button>确认</button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeEnterprise)
