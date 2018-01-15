import React from 'react'
import './NewDemand.css'
import { Form, Input, Row, Col, Select, DatePicker, Radio } from 'antd'
import SkillsRequirementItem from './SkillsRequirement'
import UploadFile from './upload-file/UploadFile'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const { TextArea } = Input

export default class NewDemand extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div>
          <span>填写需求(*为必填)</span>
          <hr />
        </div>
        <div styleName="demand-info" >
          <Form layout="vertical" styleName="demandInfo-form">
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*填写需求名">
                  <Input placeholder="姓名" />
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*选择需求类型">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="项目学科">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="项目专业">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="项目开始时间">
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="项目结束时间">
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*报名截止时间">
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*联系方式">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*所在省份">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="*所在城市">
                  <Select defaultValue="lucy" style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="*预设金额">
                  <Input placeholder="单位: 元" />
                </FormItem>
              </Col>
            </Row >
            <div>
              <div>
                <span>技能要求</span>
                <button styleName="add-button">| 添加</button>
              </div>
              <div styleName="skills-require-info">
                <SkillsRequirementItem />
                <SkillsRequirementItem />
                <SkillsRequirementItem />
                <SkillsRequirementItem />
                <SkillsRequirementItem />
                <SkillsRequirementItem />
              </div>
              <FormItem label="对接倾向">
                <RadioGroup styleName="object" name="radiogroup" defaultValue={1}>
                  <Radio styleName="object-radio" value={1}>不限</Radio>
                  <Radio styleName="object-radio" value={2}>老师</Radio>
                  <Radio styleName="object-radio" value={3}>学生</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="需求描述">
                <div styleName="description-container">
                  <TextArea rows={8} />
                  <span styleName="word-limit">字数限制: 0/400</span>
                </div>
              </FormItem>
              <FormItem label="*上传文件:">
                <UploadFile />
              </FormItem>
            </div>
          </Form>
        </div>
        <div style={{textAlign: 'center', marginTop: '60px', marginBottom: '40px'}}>
          <button styleName="release-button">立即发布</button>
        </div>

      </div>
    )
  }
}
