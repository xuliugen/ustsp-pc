// @flow
import React from 'react'
import './enterOtherInfo.css'
import { FormTitle } from '../../common'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

export default class OtherInfo extends React.Component<{}> {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="other-info" >
        <FormTitle title="其他信息" />
        <div styleName="content">
          <FormItem label="公司主页" >
            {getFieldDecorator('indexPage')(
              <Input placeholder="公司主页" />
            )}
          </FormItem>
          <FormItem label="微信公众号" >
            {getFieldDecorator('webchat')(
              <Input placeholder="微信公众号" />
            )}
          </FormItem>
          <FormItem label="公司简介" >
            {getFieldDecorator('introduction')(
              <TextArea rows={8} style={{ overflowY: 'hidden' }} />
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
