import React from 'react'
import './projectProgress.css'
import { Steps } from 'antd'
import { observer, inject } from 'mobx-react'

const Step = Steps.Step

@inject('demandStore')
@observer
export default class ProjectProgress extends React.Component {
  render() {
    return (
      <div styleName="project-progress">
        <div styleName="title">
          <span>项目进度</span>
        </div>
        <div styleName="progress">
          <Steps progressDot current={this.props.demandStore.currentStatus}>
            <Step title="审核" />
            <Step title="报名" />
            <Step title="待签单" />
            <Step title="正在进行" />
            <Step title="待验收" />
            <Step title="评价" />
            <Step title="完成" />
          </Steps>
        </div>
      </div>
    )
  }
}
