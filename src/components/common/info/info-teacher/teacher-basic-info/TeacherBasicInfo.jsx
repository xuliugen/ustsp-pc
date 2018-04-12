import React from 'react'
import { Form, Row, Col, Icon } from 'antd'
import moment from 'moment'
import FormTitle from '../../form-title/FormTitle'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import './TeacherBasicInfo.css'

const FormItem = Form.Item

export default class TeacherBasicInfo extends React.Component {
  render() {
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem>
                <span style={{fontSize: 20}}>孔浩1997</span>
              </FormItem>
              <FormItem label="性别">
                <span>
                  <Icon type="man" style={{ fontSize: 15, color: '#08c' }} />
                  男
                </span>
              </FormItem>
              <FormItem label="出生日期">
                <span>{moment().format('MMM Do YY')}</span>
              </FormItem>
              <FormItem label="微信">
                <span>
                  konghao19751122
                </span>
              </FormItem>
            </Col>
            <Col span={12}>
              <img src={defaultAvatar} styleName="avatar" />
              <FormItem label="QQ" styleName="qq">
                <span>495243922</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <span>教师证件照片:</span>
            <div styleName="tch-certificate-wrapper">
              <img src={defaultAvatar} styleName="tch-certificate" />
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
