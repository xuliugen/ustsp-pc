import React from 'react'
import { Form, Row, Col } from 'antd'
import moment from 'moment'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import './enterpriseBasicInfo.css'

const FormItem = Form.Item

export default class CmpyBasicInfo extends React.Component {
  render() {
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="企业名">
                <span>电子科技大学科园股份有限公司</span>
              </FormItem>
              <FormItem label="行业">
                <span>通信与信息技术</span>
              </FormItem>
              <FormItem label="成立时间">
                <span>{moment().format('YYYY-MM-DD')}</span>
              </FormItem>
              <FormItem label="规模">
                <span>50人以上</span>
              </FormItem>
              <FormItem label="性质">
                <span>私营企业</span>
              </FormItem>
              <FormItem label="企业营业执照号">
                <span>EPSA112908Q2</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <img src={defaultAvatar} styleName="avatar" />
              <FormItem label="地点">
                <span>成都市成华区府青路</span>
              </FormItem>
              <FormItem label="发展阶段">
                <span>上市公司</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <span>企业营业执照照片:</span>
            <div styleName="entp-certificate-wrapper">
              <img src={defaultAvatar} styleName="entp-certificate" />
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
