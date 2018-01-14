import React from 'react'
import { Form, Input, Radio, DatePicker, Row, Col, Upload } from 'antd'

import { FormTitle, UploadAvatar } from '../../common'
import './tchBaseInfo.css'

const RadioGroup = Radio.Group
const FormItem = Form.Item

export default class StudentBaseInfo extends React.Component {
  render() {
    return (
      <div>
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
                <FormItem styleName="qq" label="QQ">
                  <Input placeholder="QQ" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/">
                <div styleName="upload-tch-photo-text">+ 上传教师证照片</div>
              </Upload>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}
