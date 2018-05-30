import React from 'react'
import './evaluateForm.css'
import { Form, Rate } from 'antd'

const FormItem = Form.Item

export default class EvaluateForm extends React.Component {
  computeType(idx, value) {
    let standards = this.props.form.getFieldsValue(this.props.standards.map(item => item.field))
    let overall = Object.values(standards)
    overall[idx] = value
    this.props.form.setFieldsValue({ 'overall': Math.floor(overall.reduce((prev, cur) => prev + cur) / 4) })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 4, offset: 1 }
    }
    return (
      <div>
        <div styleName="evaluateTitle">
          <span>请对您的合作方进行评价</span>
        </div>
        {this.props.standards.map((item, idx) => {
          return (
            <FormItem key={idx} label={item.name} {...formItemLayout}>
              {getFieldDecorator(item.field, {
                initialValue: 0,
                rules: [{ required: true }]
              })(
                <Rate allowClear={false} onChange={this.computeType.bind(this, idx)} />
              )}
            </FormItem>
          )
        })}
        <FormItem label="总体评价" {...formItemLayout}>
          {getFieldDecorator('overall', {
            initialValue: 0
          })(
            <Rate allowClear={false} disabled />
          )}
        </FormItem>
        {/* <FormItem style={{ width: '80%' }} >
          {getFieldDecorator('detail', {
          })(
            <TextArea rows={4} />
            )}
        </FormItem> */}
      </div>
    )
  }
}
