import React from 'react'
import { Form, Row, Col } from 'antd'
import moment from 'moment'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import './teacherBasicInfo.css'

const FormItem = Form.Item

export default class TeacherBasicInfo extends React.Component {
  render() {
    const tchBasicInfo = this.props.tchBasicInfo
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem>
                <span style={{fontSize: 20}}>{tchBasicInfo.name}</span>
              </FormItem>
              <FormItem label="性别">
                <span>{tchBasicInfo.sex}</span>
              </FormItem>
              <FormItem label="出生日期">
                <span>{moment(tchBasicInfo.birth).format('YYYY-MM-DD')}</span>
              </FormItem>
              <FormItem label="微信">
                <span>{tchBasicInfo.wechat}</span>
              </FormItem>
              <FormItem label="手机">
                <span>{tchBasicInfo.phone}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <img src={tchBasicInfo.avatar == null ? defaultAvatar : tchBasicInfo.avatar} styleName="avatar" />
              <FormItem label="QQ">
                <span>{tchBasicInfo.qq}</span>
              </FormItem>
              <FormItem label="邮箱">
                <span>{tchBasicInfo.email}</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <span>教师证件照片:</span>
            <div styleName="tch-certificate-wrapper">
              <img src={tchBasicInfo.certificate == null ? defaultAvatar : tchBasicInfo.certificate} styleName="tch-certificate" />
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
