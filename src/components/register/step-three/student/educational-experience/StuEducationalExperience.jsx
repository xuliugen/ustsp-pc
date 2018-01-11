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
          <div>
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
              <button styleName="cancel-button">取消</button>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span styleName="school-name">西南财经大学</span>
                <span styleName="time-text">2011.9-2013.7</span>
              </div>
              <div styleName="degree-text">全日制本科</div>
              <div style={{marginTop: '10px'}}>
                <span styleName="major-text">外语学院/对外汉语专业</span>
                <span styleName="edit-text" >编辑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
