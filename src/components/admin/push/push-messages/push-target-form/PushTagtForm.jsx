import React from 'react'
import { Form, Row, Col, Cascader, Select, Input } from 'antd'
import { province, school, major, city, title } from 'src/common/dataset'

const FormItem = Form.Item
const Option = Select.Option

const [...options] = province.map(item => ({
  value: item,
  label: item,
  children: [...school[item].map(university => ({
    value: university,
    label: university
  }))]
}))

@Form.create({
  onFieldsChange: (props, fields) => {
    Object.entries(fields).forEach(([k, v]) => {
      let key = v.name
      let value
      if (k === 'school') {
        value = v.value[1]
      } else {
        value = v.value
      }
      props.setCondition(key, value)
    })
  }
})
export default class PushTagtForm extends React.Component {
  state = {
    cities: city[province[0]]
  }

  displayRender(label) {
    return label[label.length - 1]
  }

  handleProvinceChange = (value) => {
    this.setState({
      cities: city[value]
    })
    this.props.form.setFieldsValue({
      city: city[value][0]
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Row gutter={20}>
          <Col span={12}>
            <FormItem label="学科行业">
              {getFieldDecorator('major', {
                validateTrigger: 'onBlur'
                // rules: [
                //   { required: true, message: '请选择学科行业' }
                // ]
              })(
                <Select style={{ width: '100%' }}>
                  {major.map(item => <Option key={item}>{item}</Option>)}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            {/* <FormItem label="省份">
              {getFieldDecorator('province')(
                <Select style={{ width: '100%' }} onChange={this.handleProvinceChange}>
                  {province.map(prov => <Option key={prov}>{prov}</Option>)}
                </Select>
              )}
            </FormItem> */}
            <FormItem label="学校">
              {getFieldDecorator('school', {
                validateTrigger: 'onChange'
                // rules: [
                //   { required: true, message: '请选择所在学校' }
                // ]
              })(
                <Cascader style={{width: '100%'}} placeholder="学校" options={options}
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                />
              )}
            </FormItem>
            <FormItem label="身份">
              {getFieldDecorator('userType', {
                validateTrigger: 'onBlur'
                // rules: [
                //   {required: true, message: '请选择用户身份'}
                // ]
              })(
                <Select style={{ width: '100%' }}>
                  <Option value={1}>学生</Option>
                  <Option value={2}>教师</Option>
                  <Option value={3}>企业</Option>
                  <Option value={4}>科研管理人员</Option>
                  <Option value={5}>政府管理人员</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            {/* <FormItem label="城市">
              {getFieldDecorator('city')(
                <Select style={{ width: '100%' }}>
                  {this.state.cities.map(item => <Option key={item}>{item}</Option>)}
                </Select>
              )}
            </FormItem> */}
            <FormItem label="学院">
              {getFieldDecorator('college', {
                validateTrigger: 'onBlur'
                // rules: [
                //   {required: true, message: '请输入所在学院'}
                // ]
              })(
                <Input placeholder="学院" />
              )}
            </FormItem>
            <FormItem label="学历/职称">
              {getFieldDecorator('degree', {
                validateTrigger: 'onBlur'
                // rules: [
                //   {required: true, message: '请选择学历或职称'}
                // ]
              })(
                <Select style={{width: '100%'}}>
                  {title.map(item => <Option key={item}>{item}</Option>)}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>

      </div>
    )
  }
}
