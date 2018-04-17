import React from 'react'
import { Form, Row, Col, Input, DatePicker } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const { TextArea } = Input

export default class TchAwardForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { item } = this.props

    return (
      <Form layout="vertical">
        <Row gutter={20} >
          <Col span={12} >
            <FormItem label="获奖名称" style={{ flexFlow: '1' }}>
              {getFieldDecorator('name', {
                initialValue: item && item.name,
                validateTrigger: 'onBlur',
                rules: [
                  { required: true, message: '请输入获奖名称' }
                ]
              })(
                <Input placeholder="获奖名称" />
              )}
            </FormItem>
            <FormItem label="级别" style={{ flexFlow: '1' }}>
              {getFieldDecorator('level', {
                initialValue: item && item.level,
                validateTrigger: 'onBlur',
                rules: [
                  { required: true, message: '请输入类别' }
                ]
              })(
                <Input placeholder="级别" />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="排名" style={{ flexFlow: '1' }}>
              {getFieldDecorator('rank', {
                initialValue: item && item.rank,
                validateTrigger: 'onBlur'
              })(
                <Input placeholder="排名" type="number" />
              )}
            </FormItem>
            <FormItem label="获奖时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('time', {
                initialValue: item && moment(item.time),
                rules: [{ required: true, message: '请选择获奖时间' }]
              })(
                <DatePicker placeholder="请选择" style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="获奖描述" style={{ flexFlow: '1' }}>
          {getFieldDecorator('introduction', {
            initialValue: item && item.introduction,
            validateTrigger: 'onBlur'
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
      </Form>
    )
  }
}
