import React from 'react'
import './detailInfo.css'
import { Row, Col, Steps } from 'antd'
import moment from 'moment'

const Step = Steps.Step

export default class DetailInfo extends React.Component {
  setStatus(status) {
    switch (status) {
      case 'enquiry':
        return 1
      case 'sign':
        return 2
      case 'publicity':
        return 3
      default:
        return null
    }
  }

  render() {
    const { info = {} } = this.props
    return (
      <div>
        <div styleName="detail-title">
          <span>专利详情</span>
        </div>
        <div styleName="content">
          <div styleName="title">
            <span>著录项信息</span>
          </div>
          <div styleName="basic-info-content">
            <div styleName="ip-title">{info.patentName}</div>
            <div styleName="ip-content-items">
              <Row>
                <Col span={4}>
                  <div styleName="item-title">申请号</div>
                  <div styleName="item-detail">{info.applicationNumber}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">申请日</div>
                  <div styleName="item-detail">{moment(info.applicationDate).format('YYYY-MM-DD')}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">公开日</div>
                  <div styleName="item-detail">{moment(info.publicationDate).format('YYYY-MM-DD')}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">发布时间</div>
                  <div styleName="item-detail">{moment(info.createTime).format('YYYY-MM-DD')}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">法律状态</div>
                  <div styleName="item-detail">{info.legalStatus}</div>
                </Col>
                {/* <Col span={4}>
                  <div styleName="item-title">预设金额</div>
                  <div styleName="item-detail">¥10,000</div>
                </Col> */}
              </Row>
              <Row style={{marginTop: '20px'}}>
                <Col span={4}>
                  <div styleName="item-title">发明人</div>
                  <div styleName="item-detail">{info.inventor}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">专利权人</div>
                  <div styleName="item-detail">{info.applicant}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">主分类号</div>
                  <div styleName="item-detail">{info.classificationNumber}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">分类号</div>
                  <div styleName="item-detail">{info.classNumber}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">国省代码</div>
                  <div styleName="item-detail">{info.provinceCode}</div>
                </Col>
                <Col span={4}>
                  <div styleName="item-title">代理人联系方式</div>
                  <div styleName="item-detail">zhanjy@uestc.edu.cn</div>
                </Col>
              </Row>
            </div>
          </div>
          <div styleName="title">
            <span>转让进度</span>
          </div>
          <div styleName="progress">
            <Steps progressDot current={this.setstatus(this.props.status)}>
              <Step title="审核" />
              <Step title="询价中" />
              <Step title="签订合同" />
              <Step title="完成公示" />
            </Steps>
          </div>
        </div>
      </div >
    )
  }
}
