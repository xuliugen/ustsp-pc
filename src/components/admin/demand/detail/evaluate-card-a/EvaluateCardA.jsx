import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Row, Col, Button, message } from 'antd'
import './evaluateCardA.css'
import moment from 'moment'
import { DemandApi } from 'src/ajax'
import { PartyBInfo, Evaluation } from '../common'

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
          num2: values.ppe,
          num3: values.cs,
          num4: values.service_packages,
          type: 'A'
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
      { name: '专业技能', field: 'skill' },
      { name: '项目进度效率', field: 'ppe' },
      { name: '沟通顺畅度', field: 'cs' },
      { name: '运维服务', field: 'service_packages' }
    ]
    const { partyB, demand, evaluationB } = this.props.demandStore
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
          {evaluationB ? (
            <Evaluation type="a" />
          ) : (
          <div styleName="evaluate">
            <Form onSubmit={this.submitForm.bind(this)}>
              <Evaluate form={this.props.form} standards={standards} />
            </Form>
            <div styleName="submitBtn">
              <Button htmlType="submit" size="large" style={{ paddingLeft: '50px', paddingRight: '50px' }}>完成</Button>
            </div>
          </div>
          )}
        </div>
      </div>
    )
  }
}

export default Form.create()(EvaluateCardA)
