import React from 'react'
import './etpOthersForm.css'
import FormTitle from '../../form-title/FormTitle'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

export default class EtpOthersForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { etpInfo } = this.props

    return (
      <div styleName="root" >
        <FormTitle title="其他信息" />
        <div styleName="content">
          <FormItem label="公司主页" >
            {getFieldDecorator('indexPage', {
              initialValue: etpInfo && etpInfo.indexPage
            })(
              <Input placeholder="公司主页" />
            )}
          </FormItem>
          <FormItem label="微信公众号" >
            {getFieldDecorator('webchat', {
              initialValue: etpInfo && etpInfo.webchat
            })(
              <Input placeholder="微信公众号" />
            )}
          </FormItem>
          <FormItem label="公司简介" >
            {getFieldDecorator('introduction', {
              initialValue: etpInfo && etpInfo.introduction
            })(
              <TextArea rows={8} style={{ overflowY: 'hidden' }} />
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
