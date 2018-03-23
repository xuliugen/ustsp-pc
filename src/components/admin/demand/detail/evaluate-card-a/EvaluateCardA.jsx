import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Row, Col, Rate, Button, message } from 'antd'
import './evaluateCardA.css'
import moment from 'moment'
import { DemandApi } from 'src/ajax'
import { PartyBInfo } from '../common'

const FormItem = Form.Item
// const { TextArea } = Input

@inject('demandStore')
@observer
class EvaluateCardA extends React.Component {
  submitForm(e) {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const evaluate = {
          partyId: this.props.demandStore.partyB.partyId,
          ownerId: this.props.demandStore.demand.ownerId,
          projectId: this.props.demandStore.projectId,
          num1: values.skill,
          num2: values.effectiveness,
          num3: values.communication,
          num4: values.maintenance,
          type: values.type
        }
        try {
          await DemandApi.submitEvaluation(evaluate)
          message.success('评分提交成功')
          await DemandApi.changeDemandStatus({
            projectId: this.props.demandStore.projectId,
            ownerId: this.props.demandStore.demand.ownerId,
            partyId: this.props.demandStore.partyB.partyId,
            status: 'finished'
          })
          this.props.demandStore.dispatchGetDemandInfo()
        } catch (error) {
          console.log(error)
        }
      } else {
        message.error('请完善所有的打分项')
      }
    })
  }

  computeType(idx, value) {
    let standards = this.props.form.getFieldsValue(['skill', 'effectiveness', 'communication', 'maintenance'])
    let overall = Object.values(standards)
    overall[idx] = value
    this.props.form.setFieldsValue({'type': Math.floor(overall.reduce((prev, cur) => prev + cur) / 4)})
  }

  render() {
    // const standards = ['专业技能', '项目进度效率', '沟通顺畅度', '运维服务']
    const { partyB, demand } = this.props.demandStore
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 4, offset: 1 }
    }
    return (
      <div>
        <div styleName="blockTitle">正在进行</div>
        <div styleName="content">
          <div styleName="partyB-info">
            <PartyBInfo />
            <div styleName="time">
              <Row>
                <Col span={10}><div>签单发起时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                <Col span={10}><div>项目开始时间：{moment(demand.startTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
              <Row style={{ marginTop: '48px' }}>
                <Col span={10}><div>预计结束时间：{moment(demand.endTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                <Col span={10}><div>实际结束时间：{moment(demand.checkedData).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
            </div>
          </div>
          <div styleName="evaluate">
            <div styleName="evaluateTitle">
              <span>请对您的合作方进行评价</span>
            </div>
            <div styleName="evaluateForm">
              <Form onSubmit={this.submitForm.bind(this)}>
                <FormItem label="专业技能" {...formItemLayout}>
                  {getFieldDecorator('skill', {
                    initialValue: 1,
                    rules: [{ required: true }]
                  })(
                    <Rate allowClear={false} onChange={this.computeType.bind(this, 0)} />
                  )}
                </FormItem>
                <FormItem label="项目进度效率" {...formItemLayout}>
                  {getFieldDecorator('effectiveness', {
                    initialValue: 1,
                    rules: [{ required: true }]
                  })(
                    <Rate allowClear={false} onChange={this.computeType.bind(this, 1)} />
                  )}
                </FormItem>
                <FormItem label="沟通顺畅度" {...formItemLayout}>
                  {getFieldDecorator('communication', {
                    initialValue: 1,
                    rules: [
                      { required: true }
                    ]
                  })(
                    <Rate allowClear={false} onChange={this.computeType.bind(this, 2)} />
                  )}
                </FormItem>
                <FormItem label="运维服务" {...formItemLayout}>
                  {getFieldDecorator('maintenance', {
                    initialValue: 1,
                    rules: [
                      { required: true }
                    ]
                  })(
                    <Rate allowClear={false} onChange={this.computeType.bind(this, 3)} />
                  )}
                </FormItem>
                <FormItem label="总体评价" {...formItemLayout}>
                  {getFieldDecorator('type', {
                    initialValue: 1
                  })(
                    <Rate allowClear={false} disabled />
                  )}
                </FormItem>
                {/* <FormItem style={{width: '80%'}} >
                  {getFieldDecorator('detail', {
                  })(
                    <TextArea rows={4} />
                  )}
                </FormItem> */}
                <div styleName="submitBtn">
                  <Button htmlType="submit" size="large" style={{ paddingLeft: '50px', paddingRight: '50px' }}>完成</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(EvaluateCardA)
