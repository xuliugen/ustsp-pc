import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserInfoApi } from 'src/ajax'

const FormItem = Form.Item

export default class ModifyPwd extends React.Component {
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
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const modification = {
            phone: this.props.phone,
            confirm: values.confirm,
            newPassword: values.newPassword,
            code: this.props.code
          }
          await UserInfoApi.modifyPwdByPhone(modification)
          message.success('密码修改成功')
          this.props.setStep('verify')
        } catch (error) {
          message.error('密码修改失败，请使用已注册的手机号以及对应的验证码')
          console.log(error.message)
        }
      }
    })
  }

  handleCancel(type) {
    this.props.setStep(type)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3, offset: 6 },
      wrapperCol: { span: 4 }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="输入新密码" {...formItemLayout} style={{ width: '100%' }} >
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
          style={{ width: '100%', marginTop: '20px' }}
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
        <FormItem wrapperCol={{span: 4, offset: 9}} style={{ width: '100%', marginTop: '20px' }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }} >确认修改</Button>
          <a onClick={this.handleCancel.bind(this, 'verify')}>取消</a>
        </FormItem>
      </Form>
    )
  }
}
