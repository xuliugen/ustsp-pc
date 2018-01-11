import React from 'react'
import './newExpItem.css'
import { Form, Input, Row, Col, DatePicker } from 'antd'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker

export default class ExpItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <Form layout="vertical" styleName="newEdu-form">
          <FormItem label="学历级别">
            <Input />
          </FormItem>
          <FormItem label="学校">
            <Input />
          </FormItem>
          <FormItem label="学院">
            <Input />
          </FormItem>
          <FormItem label="专业">
            <Input />
          </FormItem>
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="入学时间">
                <MonthPicker />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="毕业时间">
                <MonthPicker />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div>
          <button styleName="store-button">保存</button>
          <button styleName="cancel-button">取消</button>
        </div>
      </div>
    )
  }
}
