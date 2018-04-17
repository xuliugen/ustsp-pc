import React from 'react'
import { Form, Input, Button } from 'antd'
import './phoneVerification.css'

const FormItem = Form.Item

export default class PhoneVerification extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.setStep('modify')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} >
        <FormItem wrapperCol={{ span: 8, offset: 7 }} style={{ width: '100%' }}>
          我们将向手机号134****7726发送验证码，请注意查收
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
            <div style={{display: 'flex'}}>
              <Input type="text" styleName="code" />
              <Button type="primary">发送验证码</Button>
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
