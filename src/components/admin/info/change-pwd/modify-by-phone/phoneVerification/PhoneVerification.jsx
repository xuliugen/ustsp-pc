import React from 'react'
import { Form, Input, Button, message } from 'antd'
import './phoneVerification.css'
import { UserInfoApi } from 'src/ajax'

const FormItem = Form.Item

export default class PhoneVerification extends React.Component {
  state = {
    codeBtn: {
      msg: '发送验证码',
      disable: false,
      time: 60
    },
    timer: null
  }

  sendCode(e) {
    this.props.form.validateFields(['phone'], async (err, value) => {
      if (!err) {
        try {
          await UserInfoApi.fetchCode(this.props.form.getFieldValue('phone'))
          message.success('验证码发送成功')
          this.setState({
            codeBtn: { msg: '重新发送(60)', disable: true, time: 60 }
          })
          this.cutDown()
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  cutDown = () => {
    const timer = setTimeout(function() {
      this.cutDownProgram()
    }.bind(this), 1000)
    this.setState({
      cutDown: timer
    })
  }

  cutDownProgram = () => {
    let time = this.state.codeBtn.time
    if (time === 0) {
      this.setState({
        codeBtn: { msg: '发送验证码', disable: false, time: 60 }
      })
    } else {
      this.setState({
        codeBtn: { msg: '重新获取(' + --time + ')', disable: true, time: time }
      })
      this.cutDown()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          clearTimeout(this.state.timer)
          const check = {
            phone: values.phone,
            code: values.verificationCode,
            flag: 1
          }
          const res = await UserInfoApi.checkCode(check)
          if (!res.data) {
            message.error('验证失败，请重试')
          } else {
            message.success('验证成功')
            this.props.setProp(values.phone, values.verificationCode)
            this.props.setStep('modify')
          }
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} >
        <FormItem
          label="输入手机号"
          labelCol={{ span: 2, offset: 7 }}
          wrapperCol={{ span: 6 }}
          style={{ width: '100%' }}
        >
          {getFieldDecorator('phone', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入手机号' },
              { pattern: /^1[0-9]{10}$/, message: '请输入有效的手机号码' }
            ]
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 8, offset: 7 }} styleName="form-item">
          我们将向您的手机发送验证码，请注意查收
        </FormItem>
        <FormItem
          label="输入验证码"
          labelCol={{ span: 2, offset: 7 }}
          wrapperCol={{ span: 6 }}
          styleName="form-item"
        >
          {getFieldDecorator('verificationCode', {
            validateTrigger: 'onBlur',
            rules: [{ required: true, message: '请输入验证码' }]
          })(
            <div style={{ display: 'flex' }}>
              <Input type="text" styleName="code" />
              <Button type="primary" onClick={this.sendCode.bind(this)} disabled={this.state.codeBtn.disable} >{this.state.codeBtn.msg}</Button>
            </div>
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 8, offset: 9 }} styleName="form-item">
          <Button type="primary" htmlType="submit">下一步</Button>
        </FormItem>
      </Form>
    )
  }
}
