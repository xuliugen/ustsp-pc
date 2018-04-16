import React from 'react'
import { Form, Row, Col, Input, DatePicker } from 'antd'
import moment from 'moment'

const FormItem = Form.Item

export default class TchResearchForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { item } = this.props
    return (
      <Form layout="vertical">
        <Row gutter={20} >
          <Col span={12} >
            <FormItem label="科研标题" style={{ flexFlow: '1' }}>
              {getFieldDecorator('projectName', {
                validateTrigger: 'onBlur',
                initialValue: item && item.projectName,
                rules: [
                  { required: true, message: '请输入科研标题' }
                ]
              })(
                <Input placeholder="科研标题" />
              )}
            </FormItem>
            <FormItem label="项目级别" style={{ flexFlow: '1' }}>
              {getFieldDecorator('projectLevel', {
                initialValue: item && item.projectLevel,
                validateTrigger: 'onBlur'
              })(
                <Input placeholder="项目级别" />
              )}
            </FormItem>
            <FormItem label="结束时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('endTime', {
                initialValue: (item && item.endTime) && moment(item.endTime)
              })(
                <DatePicker placeholder="请选择" style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="经费">
              {getFieldDecorator('funding', {
                initialValue: item && item.funding,
                validateTrigger: 'onBlur'
              })(
                <Input placeholder="经费" type="number" />
              )}
            </FormItem>
            <FormItem label="开始时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('startTime', {
                initialValue: (item && item.startTime) && moment(item.startTime)
              })(
                <DatePicker placeholder="请选择" style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}
