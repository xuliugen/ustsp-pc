import React from 'react'
import { Button, Row, Col, Divider, message } from 'antd'
import { withRouter } from 'react-router-dom'
import PartyInfo from './party-info/PartyInfo'
import IPTransferInfo from './IPTransferInfo/IPTransferInfo'
import './ipContent.css'
import { IpApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@withRouter
@inject('userStore')
@observer
export default class IPContent extends React.Component {
  constructor() {
    super()
    this.state = {
      enquiryBtn: {
        disable: false,
        msg: '询价'
      },
      patent: {},
      assignor: {},
      surrenderee: {}
    }
  }

  handleEnquiry = async () => {
    const userId = this.props.userStore.user.id
    try {
      await IpApi.changePatentStatus(this.props.match.params.id, userId, 'apply')
      message.success('询价成功')
      this.setState(({
        enquiryBtn: {
          disable: false,
          msg: '已询价'
        }
      }))
    } catch (error) {
      console.log(error)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getPatentDetail(nextProps.match.params.id)
  }

  componentDidMount() {
    this.getPatentDetail(this.props.match.params.id)
  }

  async getPatentDetail(id) {
    try {
      const { data } = await IpApi.fetchPatentAllDetail(this.props.match.params.id)
      this.setState(data)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { patent, assignor, surrenderee } = this.state
    return (
      <div>
        <div styleName="name-card">
          <div styleName="card-title">
            <div>
              <div styleName="name">{patent.patentName}</div>
              <div styleName="other">
                <span>发布于 {moment(patent.createTime).format('YYYY-MM-DD')}</span>
              </div>
            </div>
            <div>
              <Button type="primary" size="large" onClick={this.handleEnquiry} disabled={this.state.enquiryBtn.disable} >{this.state.enquiryBtn.msg}</Button>
            </div>
          </div>
          <div styleName="info-content">
            <Row>
              <Col span={14}>
                <div styleName="info-item"><span styleName="info-item-title">申请号</span>{patent.applicationNumber}</div>
                <div styleName="info-item"><span styleName="info-item-title">公开号</span>{patent.publicationNumber}</div>
                <div styleName="info-item"><span styleName="info-item-title">专利权人</span>{patent.applicant}</div>
                <div styleName="info-item"><span styleName="info-item-title">主分类号</span>{patent.classificationNumber}</div>
                <div styleName="info-item"><span styleName="info-item-title">地址</span>{patent.address}</div>
              </Col>
              <Col span={10}>
                <div styleName="info-item"><span styleName="info-item-title">申请日</span>{moment(patent.applicationDate).format('YYYY-MM-DD')}</div>
                <div styleName="info-item"><span styleName="info-item-title">公开日</span>{moment(patent.publicationDate).format('YYYY-MM-DD')}</div>
                <div styleName="info-item"><span styleName="info-item-title">发明人</span>{patent.inventor}</div>
                <div styleName="info-item"><span styleName="info-item-title">分类号</span>{patent.classNumber}</div>
                <div styleName="info-item"><span styleName="info-item-title">国省代码</span>{patent.provinceCode}</div>
              </Col>
            </Row>
          </div>
        </div>
        <Divider><span styleName="divider">摘要</span></Divider>
        <div styleName="content" style={{ textIndent: '28px' }}>
          {patent.abstracts}
        </div>
        {(assignor && assignor.userInfo) && (
          <div>
            <Divider><span styleName="divider">转让者信息</span></Divider>
            <div styleName="content">
              <PartyInfo info={assignor} />
            </div>
          </div>
        )}
        <Divider><span styleName="divider">相关下载</span></Divider>
        <div styleName="content">
          {patent.document ? (
            <a href={patent.document}>PDF 全文</a>
          ) : (
            <div>暂无相关下载文件</div>
          )}
        </div>
        <Divider><span styleName="divider">转让公示</span></Divider>
        <div styleName="content">
          {(surrenderee && surrenderee.userInfo) ? (
            <IPTransferInfo patent={patent} />
          ) : (
            <div style={{fontWeight: '600'}}>转让尚未完成</div>
          )}
        </div>
        <Divider><span styleName="divider">受让方信息</span></Divider>
        <div styleName="content">
          {(surrenderee && surrenderee.userInfo) ? (
            <PartyInfo info={surrenderee} />
          ) : (
            <div style={{fontWeight: '600'}}>转让尚未完成</div>
          )}
        </div>
      </div >
    )
  }
}
