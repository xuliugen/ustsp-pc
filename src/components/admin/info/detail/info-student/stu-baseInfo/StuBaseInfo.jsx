import React from 'react'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import { Form, Row, Col } from 'antd'
import './stuBaseinfo.css'
import defaultPic from 'src/assets/defaultAvatar.svg'

const FormItem = Form.Item

export default class StuBaseInfo extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <FormTitle title={'基本信息'} />
        <Row gutter={20} type="flex" justify="space-between" align="bottom">
          <Col span={12}>
            <FormItem label="姓名">
              <span>刘昌澍</span>
            </FormItem>
            <FormItem label="性别">
              <span>男</span>
            </FormItem>
            <FormItem label="出生日期">
              <span>1998.6.6</span>
            </FormItem>
            <FormItem label="微信">
              <span>xxxxxxxxxxxxxxxxxxx</span>
            </FormItem>
            <FormItem label="手机号">
              <span>18349373787</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <img styleName="icon" src={defaultPic} alt="头像" />
            <FormItem label="QQ">
              <span>898803540</span>
            </FormItem>
            <FormItem label="邮箱地址">
              <span>898803540@qq.com</span>
            </FormItem>
          </Col>
        </Row>
      </div>
    )
  }
}
