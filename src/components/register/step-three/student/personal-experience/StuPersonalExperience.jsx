import React from 'react'
import { Form, Input, Select, Row, Col } from 'antd'
import { FormTitle } from '../../common'
import './stuPersonalExperience.css'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

export default class PersonalExperience extends React.Component {
  render() {
    return (
      <div styleName="personal-experience">
        <FormTitle title={'个人履历'} />
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
          <Input size="Large" />
        </FormItem>
        <FormItem label="个人简介">
          <TextArea rows={8} />
          <div styleName="word-limit">字数限制: 0/400</div>
        </FormItem>
      </div>
    )
  }
}
