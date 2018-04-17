import React from 'react'
import { Form, Row, Col } from 'antd'
import moment from 'moment'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import './enterpriseBasicInfo.css'

const FormItem = Form.Item

export default class CmpyBasicInfo extends React.Component {
  render() {
    const etpBasicInfo = this.props.etpBasicInfo
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem>
                <span style={{fontSize: 20}}>{etpBasicInfo.name}</span>
              </FormItem>
              <FormItem label="行业">
                <span>{etpBasicInfo.industry}</span>
              </FormItem>
              <FormItem label="成立时间">
                <span>{moment(etpBasicInfo.birth).format('YYYY-MM-DD')}</span>
              </FormItem>
              <FormItem label="规模">
                <span>{etpBasicInfo.scale}</span>
              </FormItem>
              <FormItem label="性质">
                <span>{etpBasicInfo.nature}</span>
              </FormItem>
              <FormItem label="企业营业执照号">
                <span>{etpBasicInfo.businessLicense}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <img src={etpBasicInfo.avatar == null ? defaultAvatar : etpBasicInfo.avatar} styleName="avatar" />
              <FormItem label="地点">
                <span>{etpBasicInfo.place}</span>
              </FormItem>
              <FormItem label="发展阶段">
                <span>{etpBasicInfo.stage}</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <span>企业营业执照照片:</span>
            <div styleName="entp-certificate-wrapper">
              <img src={etpBasicInfo.photo == null ? defaultAvatar : etpBasicInfo.photo} styleName="entp-certificate" />
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
