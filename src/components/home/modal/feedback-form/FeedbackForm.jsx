import React from 'react'
import { Form, Input, Radio, Button, Tag, message } from 'antd'
import { inject } from 'mobx-react'
import { FeedbackApi } from 'src/ajax'
import './feedbackForm.css'
const FormItem = Form.Item
const { TextArea } = Input
const RadioGroup = Radio.Group
const url = window.location.href

@inject('userStore')
class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkState: this.props.checkState,
      loading: false
    }
  }

  handleSubmit = (e) => {
    const { userStore } = this.props
    console.log(userStore)
    e.preventDefault()
    this.props.form.validateFields(
      async (err, value) => {
        if (!err) {
          let feedbackData
          this.setState({loading: true})
          if (userStore.isLogin) {
            feedbackData = {
              pageUrl: url,
              message: value.message,
              contactName: userStore.user.realName,
              contactRegion: userStore.user.location,
              contactTelOrEmail: userStore.user.email + '/' + userStore.user.phone,
              feedbackType: value.feedbacktype
            }
          } else {
            feedbackData = {
              pageUrl: url,
              message: value.message,
              contactName: 'guest',
              contactRegion: '',
              contactTelOrEmail: '',
              feedbackType: value.feedbacktype
            }
          }
          try {
            const state = await FeedbackApi.sendfeedbackData(feedbackData)
            console.log(state)
            if (state.status === 200) {
              message.success('您的反馈我们已经收到，感谢您对我们的支持与帮助！')
            } else {
              message.error('出了些问题')
            }
            this.props.handleOk()
          } catch (err) {
            console.log(err)
          }
        }
      }
    )
  }

  validateRadio = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请选择问题类型'))
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form layout="inline">
          <FormItem styleName="form-item">
            <span styleName="label">问题类型：</span>
          </FormItem>
          <FormItem>
            {getFieldDecorator('feedbacktype', {
              validateTrigger: 'onBlur',
              rules: [
                { validator: this.validateRadio }
              ]
            })(
              <RadioGroup styleName="radio-group" value={0} >
                <Radio value={1}>技术类建议</Radio>
                <Radio value={2}>内容类建议</Radio>
                <Radio value={3}>投诉或其他</Radio>
                <Radio value={4}>反馈建议</Radio>
              </RadioGroup>
            )}
          </FormItem>
        </Form>
        <Form layout="vertical">
          <FormItem styleName="form-item">
            <span styleName="label">问题描述：</span>
          </FormItem>
          <FormItem styleName="form-item">
            {getFieldDecorator('message', {
              validateTrigger: 'onBlur',
              rules: [
                { required: true, message: '请输入问题描述' }
              ]
            })(
              <TextArea
                rows={4}
                placeholder="请详细描述您的建议、意见及问题，这将有助于我们更快地发现和解决问题。" />
            )}
          </FormItem>
        </Form>
        <Form layout="inline">
          <FormItem styleName="form-item-url">
            <span styleName="label">问题页面链接：</span>
          </FormItem>
          <FormItem styleName="form-item-url" >
            <Tag styleName="url">{url}</Tag>
          </FormItem>
        </Form>
        <Form>
          <FormItem styleName="button">
            <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Form.create()(FeedbackForm)
