import React from 'react'
import './NewDemand.css'
import { Form, Input, Row, Col, Select, DatePicker, Radio, message, Cascader, Modal, Upload, Icon } from 'antd'
// import SkillsRequirement from './SkillsRequirement'
// import UploadFile from './upload-file/UploadFile'
import { observer, inject } from 'mobx-react'
import { DemandApi } from 'src/ajax'
import { province, city, major, skill } from 'src/common/dataset'

import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const RangePicker = DatePicker.RangePicker
const { TextArea } = Input
const Dragger = Upload.Dragger
const [...options] = major.map(item => ({
  value: item,
  label: item
}))

const skillOptions = []
for (let i = 0; i < skill.length; i++) {
  skillOptions.push(<Option key={i} value={skill[i]}>{skill[i]}</Option>)
}

@inject('registerStore')
@inject('userStore')
@observer
class NewDemand extends React.Component {
  constructor() {
    super()
    this.state = {
      uploadFile: {
        fileName: null,
        fileUrl: null
      },
      skills: [],
      startTime: null,
      cities: city[province[0]],
      visible: false
    }
  }

  displayRender(label) {
    return label[label.length - 1]
  }

  setStartTime = (date) => {
    this.setState({
      startTime: date[0]
    })
  }

  disabledStartDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }

  disabledDeadline = (current) => {
    // Can not select days before today and today
    if (this.state.startTime) {
      return current <= moment().endOf('day') || current >= this.state.startTime.valueOf()
    } else {
      return current && current < moment().endOf('day')
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

  submitForm = () => {
    let projectSkillList = []
    for (let i = 0; i < this.state.skills.length; i++) {
      projectSkillList.push({
        skill: this.state.skills[i]
      })
    }
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        this.setState({
          visible: false
        })
        message.error('请完善需求信息')
      } else {
        const regData = {
          projectSkillList: values.skills.map(i => ({skill: i})),
          projectResearchInfo: {
            projectName: values.projectName,
            type: values.type,
            subject: values.subject[values.subject.length - 1],
            major: null,
            startTime: values.timeInterval[0].valueOf(),
            endTime: values.timeInterval[1].valueOf(),
            deadline: values.deadLine.valueOf(),
            contactWay: values.contactWay,
            province: values.province,
            city: values.city,
            // uploadfileUrl: this.state.uploadFile ? this.state.uploadFile.fileUrl : null,
            // uploadfileName: this.state.uploadFile ? this.state.uploadFile.fileName : null,
            uploadfileUrl: values.uploadfileUrl,
            uploadfileName: '需求文件',
            money: Number(values.money),
            toOriented: values.oriented,
            projectIntroduction: values.projectIntroduction,
            ownerId: this.props.userStore.user.id,
            status: 0
          }
        }
        try {
          await DemandApi.pubishDemand(regData)
          message.success('发布需求成功')
          this.props.history.push('/admin/demand/published-demand')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  showContactWay = () => {
    const { email = null, phone = null, qq = null, weChat = null } = this.props.userStore.user || {}

    const contactWay = []
    if (email != null) {
      contactWay.push(<Option key={1} value={email}>邮箱:{email}</Option>)
    }
    if (phone != null) {
      contactWay.push(<Option key={2} value={phone}>手机号码:{phone}</Option>)
    }
    if (qq != null) {
      contactWay.push(<Option key={3} value={qq}>QQ:{qq}</Option>)
    }
    if (weChat != null) {
      contactWay.push(<Option key={4} value={weChat}>微信:{weChat}</Option>)
    }
    return contactWay
  }

  handleProvinceChange = (value) => {
    this.setState({
      cities: city[value]
    })
    this.props.form.setFieldsValue({
      city: city[value][0]
    })
  }

  changeModal = (status) => {
    this.setState({
      visible: status
    })
  }

  normFile = (e) => {
    if (e.file.status === 'uploading') {
      return null
    } else if (e.file.status === 'done') {
      let files = e.file.response
      let result = JSON.parse(files[0].result)
      return result.data.access_url
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const uploadProps = {
      name: 'files',
      multiple: false,
      onChange(info) {
        const status = info.file.status
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
    return (
      <div styleName="container">
        <div style={{ borderBottom: '1px solid #f0f0f0' }}>
          <span styleName="title">填写需求(*为必填)</span>
        </div>
        <Form layout="vertical" style={{ padding: '41px 135px 0 135px' }}>
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
                    <Option value="工程开发">工程开发</Option>
                    <Option value="成果转化">成果转化</Option>
                    <Option value="学术研究">学术研究</Option>
                    <Option value="承接合作">承接合作</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="项目行业">
                {getFieldDecorator('subject', {
                  validateTrigger: 'onChange',
                  rules: [
                    { required: true, message: '请选择项目行业' }
                  ]
                })(
                  <Cascader placeholder="项目行业" options={options}
                    expandTrigger="hover"
                    displayRender={this.displayRender}
                  />
                )}
              </FormItem>
            </Col>
            {/* <Col span={12}>
              <FormItem label="项目专业">
                {getFieldDecorator('major', {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="项目专业" />
                )}
              </FormItem>
            </Col> */}
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="项目起止时间">
                {getFieldDecorator('timeInterval', {
                  validateTrigger: 'onchange',
                  rules: [
                    { required: true, message: '请选择项目起止时间' }
                  ]
                })(
                  <RangePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    onChange={this.setStartTime}
                    style={{ width: '100%', marginTop: '10px' }} />
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
                  <DatePicker
                    disabledDate={this.disabledDeadline}
                    showTime
                    placeholder="请选择"
                    style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
            </Col>
          </Row >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="联系方式">
                {getFieldDecorator('contactWay', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择联系方式' }
                  ]
                })(
                  <Select style={{ width: '100%' }} >
                    {this.showContactWay()}
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
                    { required: true, message: '请选择所在省份' }
                  ]
                })(
                  <Select style={{ width: '100%' }} onChange={this.handleProvinceChange}>
                    {province.map(prov => <Option key={prov}>{prov}</Option>)}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="所在城市">
                {getFieldDecorator('city', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择所在城市' }
                  ]
                })(
                  <Select style={{ width: '100%' }}>
                    {this.state.cities.map(item => <Option key={item}>{item}</Option>)}
                  </Select>
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
          <Row gutter={20}>
            <Col span={24}>
              <FormItem label="技能要求">
                {getFieldDecorator('skills')(
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                  >
                    {skillOptions}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row >
          <div>
            <FormItem label="对接倾向">
              {getFieldDecorator('oriented', {
                validateTrigger: 'onBlur',
                initialValue: 1
              })(
                <RadioGroup styleName="object" name="radiogroup" >
                  <Radio styleName="object-radio" value="不限">不限</Radio>
                  <Radio styleName="object-radio" value="老师">老师</Radio>
                  <Radio styleName="object-radio" value="学生">学生</Radio>
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
            {/* <FormItem label="上传文件:">
              <UploadFile uploadFile={this.state.uploadFile} setUploadFile={this.setUploadFile} />
            </FormItem> */}
            <FormItem label="上传文件">
              {getFieldDecorator('uploadfileUrl', {
                // valuePropName: 'fileList',
                getValueFromEvent: this.normFile
              })(
                <Dragger
                  {...uploadProps}
                  action={`${window.config.API_ORIGIN}/upload/project/file`}
                  data={{ id: this.props.userStore.user.id }} >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </Dragger>
              )}
            </FormItem>
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
            <button styleName="release-button" onClick={this.changeModal.bind(this, true)}>立即发布</button>
            <Modal
              title=""
              visible={this.state.visible}
              onOk={this.submitForm}
              onCancel={this.changeModal.bind(this, false)}
              okText="确认"
              cancelText="取消"
            >
              确认需求已经填写完整并立即发布吗?
            </Modal>
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(NewDemand)
