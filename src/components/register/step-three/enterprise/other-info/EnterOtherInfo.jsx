// @flow
import React from 'react'
import './enterOtherInfo.css'
import { FormTitle } from '../../common'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

export default class OtherInfo extends React.Component<{}> {
  render() {
    return (
      <div styleName="other-info" ref={this.props.containerRef} >
        <FormTitle title="其他信息" />
        <div styleName="content">
          <Form layout="vertical" styleName="other-info-form">
            <FormItem label="公司主页" >
              <Input placeholder="公司主页" />
            </FormItem>
            <FormItem label="微信公众号" >
              <Input placeholder="公司主页" />
            </FormItem>
            <FormItem label="公司简介" >
              <div styleName="intro-container" >
                <TextArea rows={8} style={{ overflowY: 'hidden' }} />
                <span styleName="word-limit">字数限制: 0/400</span>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
