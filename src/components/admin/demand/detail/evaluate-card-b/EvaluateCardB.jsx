import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Row, Col, Button, message } from 'antd'
import './evaluateCardB.css'
import moment from 'moment'
import { DemandApi } from 'src/ajax'
import { PartyAInfo, Evaluation, EvaluateForm } from '../common'

// const { TextArea } = Input

@inject('demandStore')
@observer
class EvaluateCardB extends React.Component {
  submitForm(e) {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const evaluate = {
          partyId: this.props.demandStore.partyB.partyId,
          ownerId: this.props.demandStore.demand.ownerId,
          projectId: this.props.demandStore.projectId,
          num1: values.project_difficulty,
          num2: values.money_reasonable,
          num3: values.cs,
          num4: values.demand_change_rate,
          type: 'B'
        }
        try {
          await DemandApi.submitEvaluation(evaluate)
          message.success('评分提交成功')
          this.props.demandStore.dispatchGetDemandInfo()
        } catch (error) {
          console.log(error)
        }
      } else {
        message.error('请完善所有的打分项')
      }
    })
  }

  render() {
    // 评价的维度：名字 + 字段名
    const standards = [
      { name: '项目难度', field: 'project_difficulty' },
      { name: '经费合理性', field: 'money_reasonable' },
      { name: '沟通顺畅度', field: 'cs' },
      { name: '经费及时性', field: 'demand_change_rate' }
    ]
    const { partyB, demand, evaluationA } = this.props.demandStore
    return (
      <div>
        <div styleName="blockTitle">正在进行</div>
        <div styleName="content">
          <div styleName="partyB-info">
            <PartyAInfo />
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
          {evaluationA ? (
            <Evaluation type="b" />
          ) : (
            <div styleName="evaluate">
              <Form onSubmit={this.submitForm.bind(this)}>
                <EvaluateForm form={this.props.form} standards={standards} />
                <div styleName="submitBtn">
                  <Button htmlType="submit" size="large" style={{ paddingLeft: '50px', paddingRight: '50px' }}>完成</Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Form.create()(EvaluateCardB)
