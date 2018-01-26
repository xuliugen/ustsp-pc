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
            <Step title="待审核" />
            <Step title="待报名" />
            <Step title="已签单" />
            <Step title="待验收" />
            <Step title="已评价" />
            <Step title="已中断" />
          </Steps>
        </div>
      </div>
    )
  }
}
