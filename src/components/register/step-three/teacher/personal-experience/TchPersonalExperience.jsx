import React from 'react'
import { Form, Input, Select, Row, Col } from 'antd'
import { FormTitle } from '../../common'
import './tchPersonalExperience.css'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

export default class PersonalExperience extends React.Component {
  render() {
    return (
      <div styleName="personal-experience">
        <FormTitle title={'个人履历'} />
        <Form styleName="personal-experience-item" style={{ marginRight: '10px' }} layout="vertical" >
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="就职学校" style={{ flexFlow: '1' }}>
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
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                <Select defaultValue="lucy" style={{ width: '100%' }} >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </FormItem>
              <FormItem label="职称">
                <Select defaultValue="lucy" style={{ width: '100%' }} >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="研究方向">
            <Input size="large" />
          </FormItem>
          <FormItem label="教学情况">
            <Input size="large" />
          </FormItem>
          <FormItem label="个人简介">
            <div styleName="intro-container">
              <TextArea rows={8} />
              <span styleName="word-limit">字数限制: 0/400</span>
            </div>
          </FormItem>
          <FormItem label="学术经历">
            <div styleName="intro-container">
              <TextArea rows={8} />
              <span styleName="word-limit">字数限制: 0/400</span>
            </div>
          </FormItem>
          <FormItem label="科研简介">
            <div styleName="intro-container">
              <TextArea rows={8} />
              <span styleName="word-limit">字数限制: 0/400</span>
            </div>
          </FormItem>
          <FormItem label="发表文章">
            <div styleName="intro-container">
              <TextArea rows={8} />
              <span styleName="word-limit">字数限制: 0/400</span>
            </div>
          </FormItem>
        </Form>
      </div>
    )
  }
}
