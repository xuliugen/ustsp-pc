import React from 'react'
import './projectProgress.css'
import { Steps } from 'antd'

const Step = Steps.Step

export default class ProjectProgress extends React.Component {
  render() {
    return (
      <div styleName="project-progress">
        <div styleName="title">
          <span>项目进度</span>
        </div>
        <div styleName="progress">
          <Steps progressDot current={this.props.currentStatus}>
            <Step title="审核" />
            <Step title="报名中" />
            <Step title="签单/执行" />
            <Step title="正在进行" />
            <Step title="验收" />
            <Step title="评价" />
          </Steps>
        </div>
      </div>
    )
  }
}
