import React from 'react'
import { Form, Input, Radio, DatePicker, Row, Col } from 'antd'

import { FormTitle, UploadAvatar } from '../../common'
import './stuBaseInfo.css'

const RadioGroup = Radio.Group
const FormItem = Form.Item

export default class StudentBaseInfo extends React.Component {
  render() {
    return (
      <div styleName="base-info" ref={this.props.containerRef}>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Form layout="vertical" styleName="baseInfo-form">
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="姓名">
                  <Input placeholder="姓名" />
                </FormItem>
                <FormItem label="性别">
                  <RadioGroup styleName="gender" name="radiogroup" defaultValue={1}>
                    <Radio styleName="gender-radio" value={1}>男</Radio>
                    <Radio styleName="gender-radio" value={2}>女</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="选择出生日期">
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                </FormItem>
                <FormItem label="微信">
                  <Input placeholder="微信" />
                </FormItem>
              </Col>
              <Col span={12}>
                <UploadAvatar />
                <FormItem label="姓名">
                  <div>asdf</div>
                </FormItem>
                <FormItem styleName="qq" label="QQ">
                  <Input placeholder="QQ" />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}
