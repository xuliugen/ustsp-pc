import React from 'react'
import './stepOne.css'
import { Form, Select, Input, Icon, Checkbox, Button } from 'antd'
import { observer } from 'mobx-react'

const { Option } = Select
const { Item: FormItem } = Form

@observer
class StepOne extends React.Component<{}> {
  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values)
    //   }
    // })
    const { history } = this.props
    history.replace('/register/2')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="container">
        <div styleName="title">step 1 : 填写基本信息</div>
        <Form styleName="form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userType', {
              rules: [{ required: true, message: '请选择用户类型' }]
            })(
              <Select placeholder="选择用户类型" size="large">
                <Option value="学生">学生</Option>
                <Option value="教师">教师</Option>
                <Option value="企业">企业</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('userMail', {
              rules: [{ required: true, message: '请输入邮箱' }]
            })(
              <Input
                size="large"
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="邮箱" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('userTel', {
              rules: [{ required: true, message: '请输入手机号' }]
            })(
              <Input
                size="large"
                prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="手机号" />
            )}
          </FormItem>
          <FormItem>
            <div>
              {getFieldDecorator('userVer', {
                rules: [{ required: true, message: '请输入验证码' }]
              })(
                <Input
                  styleName="verifyIpt"
                  size="large"
                  prefix={<Icon type="check-circle-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="验证码" />
              )}
              <Button styleName="verifyBtn" size="large" type="primary">获取</Button>
            </div>
          </FormItem>
          <FormItem>
            {getFieldDecorator('userpwd1', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="输入密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('userpwd2', {
              rules: [{ required: true, message: '密码不一致' }]
            })(
              <Input
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

export default Form.create()(StepOne)
