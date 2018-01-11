import React from 'react'
import './student.css'
import { Form, Input, Select, Row, Col } from 'antd'
import StuBaseInfo from './base-info/StuBaseInfo'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

export default class StepThree extends React.Component<{}> {
  render() {
    return (
      <div styleName="container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <StuBaseInfo />
        </div>
        <div styleName="personal-experience">
          <div styleName="divider">
            <span styleName="base-introduce-title">个人履历</span>
          </div>
          <Row>
            <Col span={12} >
              <Form styleName="personal-experience-item" style={{marginRight: '10px'}} layout="vertical" >
                <FormItem label="现读学校" style={{ flexFlow: '1' }}>
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
                <FormItem label="专业" style={{ flexFlow: '1' }}>
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Form>
            </Col>
            <Col span={12}>
              <Form styleName="personal-experience-item" style={{marginLeft: '10px'}} layout="vertical" >
                <FormItem label="专业">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
                <FormItem label="年级">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Form>
            </Col>
          </Row>
          <FormItem label="擅长技能">
            <Input />
          </FormItem>
          <FormItem label="个人简介">
            <TextArea rows={8} />
            <div styleName="word-limit">字数限制: 0/400</div>
          </FormItem>
        </div>
        <div styleName="educational-experience">
          <div styleName="divider">
            <span styleName="base-introduce-title">教育经历</span>
          </div>
        </div>
      </div>
    )
  }
}
