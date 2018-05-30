import React from 'react'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import './stuProfile.css'
import {Form, Col, Row} from 'antd'

const FormItem = Form.Item

export default class StuProfile extends React.Component {
  render() {
    const { stuInfo } = this.props

    return (
      <div styleName="wrapper">
        <FormTitle title={'个人履历'} />
        <Row gutter={20} >
          <Col span={24}>
            <FormItem label="擅长技能">
              <div>{stuInfo.skill}</div>
            </FormItem>
            <FormItem label="个人简历">
              <div>{stuInfo.introduction}</div>
            </FormItem>
          </Col>
        </Row>
      </div>
    )
  }
}
