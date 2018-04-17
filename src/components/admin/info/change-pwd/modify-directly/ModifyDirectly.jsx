import React from 'react'
import { Form, Input, Button } from 'antd'
import './modifyDirectly.css'

const FormItem = Form.Item

@Form.create()
export default class ModifyDirectly extends React.Component {
  constructor() {
    super()
    this.state = {
      confirm: { validateStatus: null } // success, error, validating
    }
  }

  compareNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value) {
      form.validateFields(['confirm'], { force: true })
      callback()
      return
    }
    callback()
  }

  compareFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (!value) {
      this.setState({
        confirm: { validateStatus: 'error' }
      })
      callback()
      return
    }
    if (value && value !== form.getFieldValue('newPassword')) {
      this.setState({
        confirm: { validateStatus: 'error' }
      })
      callback(new Error('两次输入不一致！'))
      return
    }
    this.setState({
      confirm: { validateStatus: 'success' }
    })
    callback()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4, offset: 6 },
      wrapperCol: { span: 4 }
    }
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem label="输入旧密码" {...formItemLayout} style={{ width: '100%' }} >
          {getFieldDecorator('oldPassword', {
            validateTrigger: 'onBlur',
            rules: [{ required: true, message: '请输入旧密码' }]
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem label="输入新密码" {...formItemLayout} styleName="form-item" >
          {getFieldDecorator('newPassword', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入新密码' },
              { min: 6, message: '请输入6-16位的密码' },
              { max: 16, message: '请输入6-16位的密码' },
              { validator: this.compareNextPassword }
            ]
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label="确认新密码"
          validateStatus={this.state.confirm.validateStatus}
          {...formItemLayout}
          styleName="form-item"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入确认密码' },
              { validator: this.compareFirstPassword }
            ]
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem wrapperCol={{span: 4, offset: 10}} styleName="form-item">
          <Button type="primary" htmlType="submit" styleName="confirm" >确认修改</Button>
          <a>取消</a>
        </FormItem>
      </Form >
    )
  }
}
