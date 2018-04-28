import React from 'react'
import { Form, Input, Row, Col, Select, DatePicker, Radio, Upload, Icon, message } from 'antd'
import { province, city, major, skill } from 'src/common/dataset'
import moment from 'moment'
import { observer, inject } from 'mobx-react'
import './demandForm.css'

const Dragger = Upload.Dragger
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const RangePicker = DatePicker.RangePicker
const { TextArea } = Input

const [...options] = major.map(item => ({
  value: item,
  label: item
}))
const skillOptions = []
for (let i = 0; i < skill.length; i++) {
  skillOptions.push(<Option key={i} value={skill[i]}>{skill[i]}</Option>)
}

@inject('userStore')
@observer
export default class DemandForm extends React.Component {
  state = {
    cities: city[province[0]],
    fileList: []
  }

  displayRender(label) {
    return label[label.length - 1]
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
    const { demand } = this.props
    let initialDateRange, initialSkills
    if (demand.startTime) {
      initialDateRange = [moment(demand.startTime), moment(demand.endTime)]
    }
    if (demand.skills) {
      initialSkills = demand.skills.map(({ skill }) => skill)
    }

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
      <Form layout="vertical" style={{ padding: '41px 135px 0 135px' }}>
        <Row gutter={20}>
          <Col span={12}>
            <FormItem label="项目名称">
              {getFieldDecorator('projectName', {
                initialValue: demand && demand.projectName,
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
                initialValue: demand && demand.type,
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
                initialValue: demand && demand.subject,
                validateTrigger: 'onChange',
                rules: [
                  { required: true, message: '请选择项目行业' }
                ]
              })(
                // <Cascader placeholder="项目行业" options={options}
                //   expandTrigger="hover"
                //   displayRender={this.displayRender}
                // />
                <Select style={{ width: '100%' }} >
                  {options.map(option => {
                    return <Option key={option.value} value={options.value}>{options.label}</Option>
                  })}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row >
        <Row gutter={20}>
          <Col span={12}>
            <FormItem label="项目起止时间">
              {getFieldDecorator('timeInterval', {
                initialValue: demand && initialDateRange,
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
                initialValue: demand && moment(demand.deadLine),
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
                initialValue: demand && demand.contactWay,
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
                initialValue: demand && demand.province,
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
                initialValue: demand && demand.city,
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
                initialValue: demand && demand.money,
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
              {getFieldDecorator('skills', {
                initialValue: demand && initialSkills
              })(
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
              initialValue: demand && demand.toOriented
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
              initialValue: demand && demand.projectIntroduction,
              validateTrigger: 'onBlur'
            })(
              <TextArea rows={8} />
            )}
          </FormItem>
          <FormItem label="上传文件">
            {getFieldDecorator('uploadfileUrl', {
              // valuePropName: 'fileList',
              initialValue: demand && demand.uploadfileUrl,
              getValueFromEvent: this.normFile
            })(
              <Dragger
                {...uploadProps}
                defaultFileList={demand ? [{uid: -1, name: 'pdf文件', status: 'done', url: this.props.demand.uploadfileUrl}] : []}
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
      </Form>
    )
  }
}
