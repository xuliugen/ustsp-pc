import React from 'react'
import { Form, Input, Select, Row, Col } from 'antd'
import { FormTitle } from '../../common'
import './stuPersonalExperience.css'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

export default class PersonalExperience extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="personal-experience" ref={this.props.containerRef}>
        <FormTitle title={'个人履历'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="现读学校" style={{ flexFlow: '1' }}>
                {getFieldDecorator('school', {
                  initialValue: '电子科技大学',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: '请输入就读学校' }]
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="电子科技大学">电子科技大学</Option>
                    <Option value="四川大学">电子科技大学</Option>
                    <Option value="西南财经大学">电子科技大学</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                {getFieldDecorator('major', {
                  initialValue: '软件工程',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: '请输入就读专业' }]
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="建筑">建筑</Option>
                    <Option value="软件工程">软件工程</Option>
                    <Option value="药学">药学</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                {getFieldDecorator('college', {
                  initialValue: '信软学院',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: '请输入就读学院' }]
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="信软学院">信软学院</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label="年级">
                {getFieldDecorator('stuLevel', {
                  initialValue: '研一'
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="研一">研一</Option>
                    <Option value="研二">研二</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem label="擅长技能">
            {getFieldDecorator('skill', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              validateTrigger: 'onBlur'
            })(
              <div styleName="intro-container">
                <TextArea rows={8} />
                <span styleName="word-limit">字数限制: 0/400</span>
              </div>
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
