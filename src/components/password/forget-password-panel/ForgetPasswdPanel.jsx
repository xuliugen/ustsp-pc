import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { message, Button, Form, Input, Icon } from 'antd'
import { UserInfoApi, RegisterApi } from 'src/ajax'
import './forgetPasswdPanel.css'

const FormItem = Form.Item

@Form.create()
@withRouter
export default class ForgetPasswdPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      verify: {
        validateStatus: null, // success, error, validating
        cd: 60,
        processId: null,
        btnDisabled: false,
        btnText: '获取'
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const modification = {
            phone: values.phone,
            confirm: values.passwdConfirm,
            newPassword: values.passwd,
            code: values.checkCode
          }
          await UserInfoApi.modifyPwdByPhone(modification)
          message.success('密码修改成功')
          this.props.history.replace('/login')
        } catch (error) {
          message.error('密码修改失败，请使用已注册的手机号以及对应的验证码')
          console.log(error.message)
        }
      }
    })
  }

  validateTelExist = async (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    const tel = getFieldValue('phone')
    if (tel) {
      const { data } = await RegisterApi.checkUserExist(`?phone=${tel}`)
      if (data) {
        // 已经存在了
        callback()
      } else {
        callback(new Error('手机号未注册'))
      }
    }
  }

  handleValidateVerCode = (rule, value, callback) => {
    if (this.state.verify.validateStatus === 'success') {
      callback()
      return
    }
    const code = this.props.form.getFieldValue('checkCode')
    const tel = this.props.form.getFieldValue('phone')
    if (!tel || !code) {
      this.setState(pre => ({
        verify: {
          ...pre.verify,
          validateStatus: 'error'
        }
      }))
      callback()
      return
    }

    if (value) {
      this.setState(pre => ({
        verify: {
          ...pre.verify,
          validateStatus: 'validating'
        }
      }))
      RegisterApi.checkVerifyCode(code, tel, 'phone')
        .then(({ data }) => {
          if (data) {
            this.terminate()
            callback()
          } else {
            this.setState(pre => ({
              verify: {
                ...pre.verify,
                validateStatus: 'error'
              }
            }))
            callback(new Error('验证码错误'))
          }
        })
    }
  }

  terminate() {
    if (this.state.verify.processId) {
      clearTimeout(this.state.verify.processId)
    }
    this.setState(pre => ({
      verify: {
        ...pre.verify,
        validateStatus: 'success',
        btnDisabled: true,
        btnText: '验证成功'
      }
    }))
  }

  fetchVerCode = () => {
    const { getFieldValue } = this.props.form
    const tel = getFieldValue('phone')
    this.props.form.validateFields(['phone'], async (err) => {
      if (!err) {
        // const data = await RegisterApi.fetchVerifyCode(tel)
        RegisterApi.fetchVerifyCode(tel)
        this.process()
      }
    })
  }

  process = () => {
    const processId = setTimeout(() => {
      this.performProcessing()
    }, 1000)
    this.setState((pre) => {
      const verify = Object.assign({}, pre.verify, { processId })
      return { verify }
    })
  }

  performProcessing = () => {
    const { cd } = this.state.verify
    if (cd === 0) {
      this.setState((pre) => {
        const verify = Object.assign({}, pre.verify, {
          btnText: '获取',
          btnDisabled: false,
          cd: 60
        })
        return { verify }
      })
    } else {
      this.setState((pre) => {
        const verify = Object.assign({}, pre.verify, {
          btnDisabled: true,
          cd: pre.verify.cd - 1,
          btnText: `重新${pre.verify.cd - 1}s`
        })
        return { verify }
      })
      this.process()
    }
  }

  handleValidatePwd = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    const confirmPwd = getFieldValue('passwdConfirm')
    if (confirmPwd) {
      if (value && value !== confirmPwd) {
        callback(new Error('两次输入不一致！'))
      }
    }
    callback()
  }

  handleValidateConfirmPwd = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('passwd')) {
      callback(new Error('两次输入不一致！'))
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="panel-container">
        <header styleName="panel-header">
          <div styleName="header-title">修改密码</div>
          <div styleName="header-pwd">
            <Link to="/login"><Icon type="left-circle-o" style={{marginRight: 10}} />返回登陆</Link>
          </div>
        </header>
        <div styleName="form-wrapper">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
            >
              {getFieldDecorator('phone', {
                validateTrigger: 'onBlur',
                rules: [
                  { required: true, message: '请输入手机号' },
                  { pattern: /^1[0-9]{10}$/, message: '手机号格式有误' },
                  { validator: this.validateTelExist }
                ]
              })(
                <Input
                  size="large"
                  prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="手机号" />
              )}
            </FormItem>
            <div styleName="verfiyRow">
              <FormItem
                styleName="verifyIpt"
                validateStatus={this.state.verify.validateStatus}
                hasFeedback>
                {getFieldDecorator('checkCode', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入验证码' },
                    { validator: this.handleValidateVerCode }
                  ]
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="check-circle-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="验证码" />
                )}
              </FormItem>
              <Button
                styleName="verifyBtn"
                size="large"
                type="primary"
                disabled={this.state.verify.btnDisabled}
                onClick={this.fetchVerCode}>
                {this.state.verify.btnText}
              </Button>
            </div>
            <FormItem>
              {getFieldDecorator('passwd', {
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
              {getFieldDecorator('passwdConfirm', {
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
            <div styleName="nextBtn-container">
              <Button htmlType="submit" styleName="nextBtn" type="primary" size="large">提交</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
