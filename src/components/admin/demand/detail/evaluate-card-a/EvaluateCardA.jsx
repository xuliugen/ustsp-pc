import React from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Form, Input, Icon, Row, Col, Rate, Button, message } from 'antd'
import './evaluateCardA.css'
import moment from 'moment'

const FormItem = Form.Item
const { TextArea } = Input

@withRouter
@inject('demandStore')
@observer
class EvaluateCardA extends React.Component {
  handleSeeDetail(person) {
    let type = ''
    if (person.partyType === 1) {
      type = 'student'
    } else if (person.partyType === 2) {
      type = 'teacher'
    } else if (person.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.partyId}`)
  }

  showUserType() {
    const partyB = this.props.demandStore.partyB
    let user = null
    if (partyB.partyType === 1) {
      user = '学生'
    } else if (partyB.partyType === 2) {
      user = '教师'
    } else if (partyB.partyType === 3) {
      user = '企业'
    }
    return user
  }

  setSex = () => {
    let renderStyle = null
    if (this.props.demandStore.partyB.partySex === 1) {
      renderStyle = {
        icon: 'man',
        styleName: 'render-man'
      }
    } else {
      renderStyle = {
        icon: 'woman',
        styleName: 'render-woman'
      }
    }
    return renderStyle
  }

  submitForm(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  render() {
    const { partyB, demand } = this.props.demandStore
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 4, offset: 1 }
    }
    return (
      <div>
        <div styleName="title">正在进行</div>
        <div styleName="content" >
          <div styleName="info-title">
            <span>乙方信息</span>
          </div>
          <div styleName="partyB-info">
            <div styleName="base-info">
              <img src={partyB.partyAvatar} onClick={this.handleSeeDetail.bind(this, partyB)} />
              <span styleName="name">{partyB.partyName}</span>
              <span><Icon type={this.setSex().icon} styleName={this.setSex().styleName} /></span>
              <span styleName="info" >{this.showUserType()}/{partyB.partyLocation}</span>
              <span styleName="email">{partyB.partyContact}</span>
            </div>
            <div styleName="time">
              <Row>
                <Col span={10}><div>签单发起时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                <Col span={10}><div>项目开始时间：{moment(demand.startTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
              <Row style={{ marginTop: '48px' }}>
                <Col span={10}><div>预计结束时间：{moment(demand.endTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                {/* 实际结束时间？？ */}
                <Col span={10}><div>实际结束时间：{moment(demand.applyDate).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
            </div>
          </div>
          <div styleName="info-title">
            <span>请对您的合作方进行评价</span>
          </div>
          <div styleName="evaluate">
            <Form onSubmit={this.submitForm.bind(this)}>
              <FormItem label="专业技能" {...formItemLayout}>
                {getFieldDecorator('skill', {
                })(
                  <Rate allowClear={false} />
                )}
              </FormItem>
              <FormItem label="项目进度效率" {...formItemLayout}>
                {getFieldDecorator('effectiveness', {
                })(
                  <Rate allowClear={false} />
                )}
              </FormItem>
              <FormItem label="沟通顺畅度" {...formItemLayout}>
                {getFieldDecorator('communication', {
                })(
                  <Rate allowClear={false} />
                )}
              </FormItem>
              <FormItem label="运维服务" {...formItemLayout}>
                {getFieldDecorator('maintenance', {
                })(
                  <Rate allowClear={false} />
                )}
              </FormItem>
              <FormItem label="总体评价" {...formItemLayout}>
                {getFieldDecorator('overall', {
                })(
                  <Rate allowClear={false} />
                )}
              </FormItem>
              <FormItem style={{width: '80%'}} >
                {getFieldDecorator('detail', {
                })(
                  <TextArea rows={4} />
                )}
              </FormItem>
              <div styleName="submitBtn">
                <Button htmlType="submit" size="large" style={{paddingLeft: '50px', paddingRight: '50px'}}>完成</Button>
              </div>
            </Form>
          </div>
        </div>
      </div >
    )
  }
}

export default Form.create()(EvaluateCardA)
