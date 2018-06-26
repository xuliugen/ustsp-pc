import React from 'react'
import { Form, Row, Col, Cascader, Select, Input } from 'antd'
import { province, school, role, major, city, title } from 'src/common/dataset'

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
                validateTrigger: 'onBlur',
                rules: [
                  { required: true, message: '请选择学科行业' }
                ]
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
            <FormItem label="省份">
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
            <FormItem label="学校">
              {getFieldDecorator('school', {
                validateTrigger: 'onChange',
                rules: [
                  { required: true, message: '请选择所在学校' }
                ]
              })(
                <Cascader style={{width: '100%'}} placeholder="学校" options={options}
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                />
              )}
            </FormItem>
            <FormItem label="身份">
              {getFieldDecorator('role', {
                validateTrigger: 'onBlur',
                rules: [
                  {required: true, message: '请选择用户身份'}
                ]
              })(
                <Select style={{ width: '100%' }}>
                  {role.map(item => <Option key={item}>{item}</Option>)}
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="城市">
              {getFieldDecorator('city', {
                validateTrigger: 'onBlur',
                rules: [
                  {required: true, message: '请选择所在城市'}
                ]
              })(
                <Select style={{ width: '100%' }}>
                  {this.state.cities.map(item => <Option key={item}>{item}</Option>)}
                </Select>
              )}
            </FormItem>
            <FormItem label="学院">
              {getFieldDecorator('institute', {
                validateTrigger: 'onBlur',
                rules: [
                  {required: true, message: '请输入所在学院'}
                ]
              })(
                <Input placeholder="学院" />
              )}
            </FormItem>
            <FormItem label="学历/职称">
              {getFieldDecorator('title', {
                validateTrigger: 'onBlur',
                rules: [
                  {required: true, message: '请选择学历或职称'}
                ]
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
