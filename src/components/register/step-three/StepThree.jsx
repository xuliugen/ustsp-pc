import React from 'react'
import './stepThree.css'
import { Form, Input, Radio, DatePicker, Select, Row, Col } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const { TextArea } = Input

export default class StepThree extends React.Component<{}> {
  render() {
    return (
      <div styleName="container">
        <div>
          <span styleName="title">step 3：完善详细信息</span>
          <button styleName="next-step">|&nbsp;&nbsp;&nbsp;&nbsp;跳过此步骤</button>
        </div>
        <div styleName="base-info">
          <div styleName="divider">
            <span styleName="base-introduce-title">基本信息</span>
          </div>
          <div styleName="person-info">
            <div styleName="left-info">
              <Form layout="vertical">
                <FormItem label="姓名">
                  <Input placeholder="姓名" />
                </FormItem>
                <FormItem label="性别">
                  <RadioGroup styleName="sex"
                    name="radiogroup" defaultValue={1}>
                    <Radio styleName="sex-radio" value={1}>男</Radio>
                    <Radio styleName="sex-radio" value={2}>女</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="选择出生日期">
                  <DatePicker placeholder="请选择" style={{width: '100%', marginTop: '10px'}} />
                </FormItem>
                <FormItem label="微信">
                  <Input placeholder="微信" />
                </FormItem>
              </Form>
            </div>
            <div styleName="right-info">
              <div styleName="photo">ss</div>
              <FormItem styleName="qq" label="QQ">
                <Input placeholder="QQ" />
              </FormItem>
            </div>
          </div>
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
