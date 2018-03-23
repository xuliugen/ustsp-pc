import React from 'react'
import './evaluation.css'
import { observer, inject } from 'mobx-react'
import { Form, Rate } from 'antd'

const FormItem = Form.Item

@inject('demandStore')
@observer
export default class Evaluation extends React.Component {
  render() {
    let title = ''
    let desc1 = ''
    let desc2 = ''
    let desc3 = ''
    let desc4 = ''
    let num1 = 0
    let num2 = 0
    let num3 = 0
    let num4 = 0
    let total = 0
    if (this.props.type === 'a') {
      title = '对乙方的评价'
      if (this.props.demandStore.evaluationB) {
        let { skill, projectProgressefficiency, communicationsmoothness, servicePackages } = this.props.demandStore.evaluationB
        num1 = skill
        num2 = projectProgressefficiency
        num3 = communicationsmoothness
        num4 = servicePackages
        total = (num1 + num2 + num3 + num4) / 4
        desc1 = '专业技能'
        desc2 = '项目进度效果'
        desc3 = '沟通顺畅度'
        desc4 = '运维服务'
      }
    } else if (this.props.type === 'b') {
      if (this.props.demandStore.evaluationA) {
        let { projectDifficulty, moneyReasonable, communicationsmoothness, demandChangeRate } = this.props.demandStore.evaluationA
        num1 = projectDifficulty
        num2 = moneyReasonable
        num3 = communicationsmoothness
        num4 = demandChangeRate
        total = (num1 + num2 + num3 + num4) / 4
        desc1 = '项目难度'
        desc2 = '经费合理性'
        desc3 = '沟通顺畅度'
        desc4 = '需求合理性'
      }
      title = '对甲方的评价'
    }
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 4, offset: 1 }
    }
    return (
      <div>
        <div styleName="title">
          <span>{title}</span>
        </div>
        <Form>
          <FormItem label={desc1} {...formItemLayout}>
            <Rate allowClear={false} disabled value={num1} />
          </FormItem>
          <FormItem label={desc2} {...formItemLayout}>
            <Rate allowClear={false} disabled value={num2} />
          </FormItem>
          <FormItem label={desc3} {...formItemLayout}>
            <Rate allowClear={false} disabled value={num3} />
          </FormItem>
          <FormItem label={desc4} {...formItemLayout}>
            <Rate allowClear={false} disabled value={num4} />
          </FormItem>
          <FormItem label="总体评价" {...formItemLayout}>
            <Rate allowClear={false} disabled value={total} />
          </FormItem>
        </Form>
      </div>
    )
  }
}
