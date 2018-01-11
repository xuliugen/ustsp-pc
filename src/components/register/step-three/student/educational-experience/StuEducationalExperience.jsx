import React from 'react'
import { FormTitle } from '../../common'
import './stuEducationalExperience.css'
import { Form, Input, Row, Col, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

export default class StuEdicationalExperience extends React.Component<{}> {
  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} />
        <div styleName="content">
          <Form layout="vertical">
            <FormItem label="学历级别" styleName="form-item" >
              <Input styleName="input-height" />
            </FormItem>
            <FormItem label="学校" styleName="form-item">
              <Input styleName="input-height" />
            </FormItem>
            <FormItem label="学院" styleName="form-item">
              <Input styleName="input-height" />
            </FormItem>
            <FormItem label="专业" styleName="form-item">
              <Input styleName="input-height" />
            </FormItem>
          </Form>
          <Row styleName="form-item">
            <Col span={12} >
              <Form styleName="" style={{ marginRight: '10px' }} layout="vertical" >
                <FormItem label="入学时间" style={{ flexFlow: '1' }}>
                  <Select defaultValue="lucy" size="large" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Form>
            </Col>
            <Col span={12}>
              <Form styleName="" style={{ marginLeft: '10px' }} layout="vertical" >
                <FormItem label="毕业时间">
                  <Select defaultValue="lucy" size="large" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Form>
            </Col>
          </Row>
          <div>
            <button styleName="store-button">保存</button>
            <span styleName="cancel-button">取消</span>
          </div>
        </div>
      </div>
    )
  }
}
