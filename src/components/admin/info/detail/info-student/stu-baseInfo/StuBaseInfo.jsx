import React from 'react'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import { Form, Row, Col } from 'antd'
import './stuBaseinfo.css'
import moment from 'moment'

const FormItem = Form.Item

export default class StuBaseInfo extends React.Component {
  formatGender(gender) {
    switch (Number(gender)) {
      case 0:
        return '男'
      case 1:
        return '女'
    }
  }
  render() {
    const { userInfo, stuInfo } = this.props
    return (
      <div styleName="wrapper">
        <FormTitle title={'基本信息'} />
        <Row gutter={20} type="flex" justify="space-between" align="bottom">
          <Col span={12}>
            <FormItem label="姓名">
              <span>{stuInfo.realName}</span>
            </FormItem>
            <FormItem label="性别">
              <span>{this.formatGender(stuInfo.sex)}</span>
            </FormItem>
            <FormItem label="出生日期">
              <span>{moment(stuInfo.birth).format('YYYY.MM.DD')}</span>
            </FormItem>
            <FormItem label="微信">
              <span>{stuInfo.wechat}</span>
            </FormItem>
            <FormItem label="手机号">
              <span>{userInfo.phone}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <img styleName="icon" src={stuInfo.photo} alt="头像" />
            <FormItem label="QQ">
              <span>{stuInfo.qq}</span>
            </FormItem>
            <FormItem label="邮箱地址">
              <span>{userInfo.email}</span>
            </FormItem>
          </Col>
        </Row>
      </div>
    )
  }
}
