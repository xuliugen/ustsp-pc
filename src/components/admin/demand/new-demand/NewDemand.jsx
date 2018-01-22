import React from 'react'
import './NewDemand.css'
import { Form, Input, Row, Col, Select, DatePicker, Radio, message } from 'antd'
import SkillsRequirement from './SkillsRequirement'
import UploadFile from './upload-file/UploadFile'
import { observer, inject } from 'mobx-react'
import { DemandApi } from 'src/ajax'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const { TextArea } = Input

@inject('registerStore')
@observer
class NewDemand extends React.Component {
  constructor() {
    super()
    this.state = {
      uploadFile: null,
      skills: []
    }
  }

  setSkills = (skills) => {
    this.setState({
      skills: skills
    })
  }

  setUploadFile = (file) => {
    this.setState({
      uploadFile: file
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let projectSkillList = []
    for (let i = 0; i < this.state.skills.length; i++) {
      projectSkillList.push({
        skill: this.state.skills[i]
      })
    }

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const regData = {
          projectSkillList: projectSkillList,
          projectResearchInfo: {
            projectName: values.projectName,
            type: values.type,
            subject: values.subject,
            major: values.major,
            startTime: values.startTime.valueOf(),
            endTime: values.endTime.valueOf(),
            deadLine: values.deadLine.valueOf(),
            phoneNumber: Number(values.phoneNumber),
            province: values.province,
            city: values.city,
            money: Number(values.money),
            toOriented: values.oriented,
            projectIntroduction: values.projectIntroduction,
            ownerId: this.props.registerStore.initial.uid,
            status: 0
          }
        }
        try {
          await DemandApi.pubishDemand(regData)
          message.success('发布需求成功')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="container">
        <div>
          <span styleName="title">填写需求(*为必填)</span>
          <hr style={{ border: '1 solid #f0f0f0' }} />
        </div>
        <Form layout="vertical" styleName="demand-info" onSubmit={this.handleSubmit}>
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="项目名称">
                {getFieldDecorator('projectName', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请填写需求名' }
                  ]
                })(
                  <Input placeholder="项目名称" />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="需求类型">
                {getFieldDecorator('type', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择需求类型' }
                  ]
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="项目学科">
                {getFieldDecorator('subject', {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="项目学科" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="项目专业">
                {getFieldDecorator('major', {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="项目专业" />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="项目开始时间">
                {getFieldDecorator('startTime', {
                  validateTrigger: 'onBlur'
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="项目结束时间">
                {getFieldDecorator('endTime', {
                  validateTrigger: 'onBlur'
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="报名截止时间">
                {getFieldDecorator('deadLine', {
                  rules: [
                    { required: true, message: '请选择报名截止时间' }
                  ]
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="联系方式">
                {getFieldDecorator('phoneNumber', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入联系方式' }
                  ]
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="QQ">QQ:</Option>
                    <Option value="微信">微信:</Option>
                    <Option value="电话号码">电话号码:</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="所在省份">
                {getFieldDecorator('province', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入所在省份' }
                  ]
                })(
                  <Input placeholder="所在省份" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="所在城市">
                {getFieldDecorator('city', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入所在城市' }
                  ]
                })(
                  <Input placeholder="所在城市" />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="预设金额">
                {getFieldDecorator('money', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入预设金额' }
                  ]
                })(
                  <Input placeholder="单位: 元" type="number" />
                )}
              </FormItem>
            </Col>
          </Row >
          <div>
            <div>
              <span>技能要求</span>
            </div>
            <div styleName="skills-require-info">
              <SkillsRequirement skills={this.state.skills} setSkills={this.setSkills} />
            </div>
            <FormItem label="对接倾向">
              {getFieldDecorator('oriented', {
                validateTrigger: 'onBlur',
                initialValue: 1
              })(
                <RadioGroup styleName="object" name="radiogroup" >
                  <Radio styleName="object-radio" value={1}>不限</Radio>
                  <Radio styleName="object-radio" value={2}>老师</Radio>
                  <Radio styleName="object-radio" value={3}>学生</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="需求描述">
              {getFieldDecorator('projectIntroduction', {
                validateTrigger: 'onBlur'
              })(
                <TextArea rows={8} />
              )}
            </FormItem>
            <FormItem label="上传文件:">
              <UploadFile uploadFile={this.state.uploadFile} setUploadFile={this.setUploadFile} />
            </FormItem>
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
            <button htmlType="submit" styleName="release-button">立即发布</button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(NewDemand)
