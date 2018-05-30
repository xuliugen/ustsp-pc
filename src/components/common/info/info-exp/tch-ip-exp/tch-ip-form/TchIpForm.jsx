import React from 'react'
import { Form, Row, Col, Input, DatePicker, Select } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option

export default class TchIpForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { item: exp } = this.props

    return (
      <Form layout="vertical">
        <Row gutter={20} >
          <Col span={12} >
            <FormItem label="产权名称" style={{ flexFlow: '1' }}>
              {getFieldDecorator('name', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.name,
                rules: [
                  { required: true, message: '请输入产权名称' }
                ]
              })(
                <Input placeholder="产权名称" />
              )}
            </FormItem>
            <FormItem label="产权类别" style={{ flexFlow: '1' }}>
              {getFieldDecorator('type', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.type,
                rules: [
                  { required: true, message: '请选择产权类别' }
                ]
              })(
                <Select placeholder="产权类别">
                  <Option value={0}>发明</Option>
                  <Option value={1}>实用新型</Option>
                  <Option value={2}>外观设计</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="发明人" style={{ flexFlow: '1' }}>
              {getFieldDecorator('inventor', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.inventor,
                rules: [
                  { required: true, message: '请填写发明人' }
                ]
              })(
                <Input placeholder="发明人" />
              )}
            </FormItem>
            <FormItem label="产权排名" style={{ flexFlow: '1' }}>
              {getFieldDecorator('rank', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.rank
              })(
                <Input placeholder="产权排名" type="number" />
              )}
            </FormItem>
            <FormItem label="受理状态" style={{ flexFlow: '1' }}>
              {getFieldDecorator('status', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.status,
                rules: [
                  { required: true, message: '请选择受理状态' }
                ]
              })(
                <Select placeholder="受理状态">
                  <Option value={1}>已受理</Option>
                  <Option value={2}>未受理</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="国家" style={{ flexFlow: '1' }}>
              {getFieldDecorator('country', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.country
              })(
                <Input placeholder="产权归属地" />
              )}
            </FormItem>
            <FormItem label="产权登记编号" style={{ flexFlow: '1' }}>
              {getFieldDecorator('registrationNumber', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.registrationNumber,
                rules: [
                  { required: true, message: '请输入产权注册号' }
                ]
              })(
                <Input placeholder="产权注册号" type="number" />
              )}
            </FormItem>
            <FormItem label="申请单位" style={{ flexFlow: '1' }}>
              {getFieldDecorator('applyUnit', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.applyUnit
              })(
                <Input placeholder="申请单位" />
              )}
            </FormItem>
            <FormItem label="申请时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('applyDate', {
                initialValue: exp && moment(exp.applyDate)
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
