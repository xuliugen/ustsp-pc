import React from 'react'
import { Form, Select, Input, Icon, Checkbox, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { RegisterApi, TchInfoApi } from 'src/ajax'
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
        validateStatus: null, // success, error, validating
        cd: 60,
        processId: null,
        btnDisabled: false,
        btnText: '获取'
      }
    }
  }

  componentDidMount() {
    // this.props.form.resetFields()
    if (this.props.registerStore.initial) {
      this.props.form.setFieldsValue(this.props.registerStore.initial)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { registerStore } = this.props
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const regData = {
          phone: values.userTel,
          password: values.pwd,
          userType: values.userType,
          email: values.userMail
        }
        try {
          const { data } = await RegisterApi.register(regData)
          if (data && data.user.id) {
            message.success('注册成功，进入下一步')
            registerStore.setInitialData({ uid: data.user.id, email: values.userMail })
            if (values.userType === 2) {
              // YuLiu@uestc.edu.cn
              const { data } = await TchInfoApi.claimTchInfo(values.userMail)
              if (data.code === 200) {
                data.data.icon = window.config.USA_ORIGIN + data.data.icon
                registerStore.setClaimData(data.data)
                RegisterApi.sendCheckEmail(values.userMail)
                this.props.history.replace('/register/2')
              } else {
                this.props.history.replace('/register/3')
              }
            } else {
              this.props.history.replace('/register/3')
            }
          }
        } catch (err) {
          console.log(err)
        }
      }
    })
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
      return
    }
    const code = this.props.form.getFieldValue('userVer')
    const tel = this.props.form.getFieldValue('userTel')
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
        .then(res => {
          if (res) {
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
    this.props.form.validateFields(['userTel'], async (err) => {
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

  terminate = () => {
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

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="form-wrapper">
        <Form styleName="form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userType', {
              rules: [{ required: true, message: '请选择用户类型' }]
            })(
              <Select placeholder="选择用户类型" size="large" onChange={this.handleUserTypeChange}>
                <Option value={1}>学生</Option>
                <Option value={2}>教师</Option>
                <Option value={3}>企业</Option>
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
          <div styleName="verfiyRow">
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
      </div>
    )
  }
}

export default Form.create()(RegForm)
