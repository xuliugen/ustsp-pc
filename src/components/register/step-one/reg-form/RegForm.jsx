import React from 'react'
import { Form, Select, Input, Icon, Checkbox, Button } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './regForm.css'

const { Option } = Select
const { Item: FormItem } = Form

@withRouter
@inject('registerStore')
@observer
class RegForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verify: {
        validateStatus: '' // success, error, validating
      }
    }
  }

  componentDidMount() {
    this.props.form.resetFields()
    this.props.form.setFieldsValue(this.props.registerStore.initial)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      // if (!err) {
      //   console.log('Received values of form: ', values)
      // }
      console.log(err)
      this.props.registerStore.setInitialData(values)
    })
    // const { history } = this.props
    // history.push('/register/3')
  }

  handleUserTypeChange = (val) => {
    const { setInitialData } = this.props.registerStore
    setInitialData({
      userType: val
    })
  }

  handleValidateVerCode = (rule, value, callback) => {
    if (this.state.verify.validateStatus === 'success') {
      callback()
    }
    if (value) {
      this.setState({
        verify: { validateStatus: 'validating' }
      })
      setTimeout(() => {
        const isMath = true
        if (isMath) {
          this.setState({
            verify: { validateStatus: 'success' }
          })
          callback()
        } else {
          this.setState({
            verify: { validateStatus: 'error' }
          })
          callback(new Error('验证码错误'))
        }
      }, 300)
    }
  }

  handleValidatePwd = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    const confirmPwd = getFieldValue('confirmPwd')
    if (confirmPwd) {
      if (value && value !== confirmPwd) {
        callback(new Error('两次输入不一致！'))
      }
    }
    callback()
  }

  handleValidateConfirmPwd = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('pwd')) {
      callback(new Error('两次输入不一致！'))
    }
    callback()
  }

  fetchVerCode = () => {
    const { getFieldValue } = this.props.form
    const tel = getFieldValue('userTel')
    this.props.form.validateFields(['userTel'], (err) => {
      if (!err) {
        console.log('get code', tel)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form styleName="form" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userType', {
            rules: [{ required: true, message: '请选择用户类型' }]
          })(
            <Select placeholder="选择用户类型" size="large" onChange={this.handleUserTypeChange}>
              <Option value="student">学生</Option>
              <Option value="teacher">教师</Option>
              <Option value="enterprise">企业</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userMail', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '邮箱格式有误' }
            ]
          })(
            <Input
              size="large"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="邮箱" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userTel', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入手机号' },
              { pattern: /^1[0-9]{10}$/, message: '手机号格式有误' }
            ]
          })(
            <Input
              size="large"
              prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="手机号" />
          )}
        </FormItem>
        <div>
          <FormItem
            styleName="verifyIpt"
            validateStatus={this.state.verify.validateStatus}
            hasFeedback>
            {getFieldDecorator('userVer', {
              validateTrigger: 'onBlur',
              rules: [
                { required: true, message: '请输入验证码' },
                { validator: this.handleValidateVerCode }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="check-circle-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                // validateStatus={this.state.verify.validateStatus}
                placeholder="验证码" />
            )}
          </FormItem>
          <Button styleName="verifyBtn" size="large" type="primary" onClick={this.fetchVerCode}>获取</Button>
        </div>
        <FormItem>
          {getFieldDecorator('pwd', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入密码' },
              { min: 6, message: '请输入大于等于6位的密码' },
              { validator: this.handleValidatePwd }
            ]
          })(
            <Input
              type="password"
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="输入密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirmPwd', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请确认密码' },
              { validator: this.handleValidateConfirmPwd }
            ]
          })(
            <Input
              type="password"
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="确认密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('userAgree', {
            rules: [{ required: true, message: '请选择同意' }]
          })(
            <Checkbox><span>我已阅读并同意《UppFind用户注册协议》</span></Checkbox>
          )}
        </FormItem>
        <div styleName="nextBtn-container">
          <Button htmlType="submit" styleName="nextBtn" type="primary" size="large">下一步</Button>
        </div>
      </Form>
    )
  }
}

export default Form.create()(RegForm)
