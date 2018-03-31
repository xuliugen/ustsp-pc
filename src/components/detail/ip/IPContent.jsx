import React from 'react'
import { Button, Row, Col, Divider, message } from 'antd'
import { withRouter } from 'react-router-dom'
import PartyInfo from './party-info/PartyInfo'
import IPTransferInfo from './IPTransferInfo/IPTransferInfo'
import './ipContent.css'
import { IpApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

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
      download: 'xx.png'
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

  render() {
    return (
      <div>
        <div styleName="name-card">
          <div styleName="card-title">
            <div>
              <div styleName="name">基于移动视窗平台的多卡手机网络连接选择方法及装置</div>
              <div styleName="other">
                <span>发布于 2018-03-13</span>
              </div>
            </div>
            <div>
              <Button type="primary" size="large" onClick={this.handleEnquiry} disabled={this.state.enquiryBtn.disable} >{this.state.enquiryBtn.msg}</Button>
            </div>
          </div>
          <div styleName="info-content">
            <Row>
              <Col span={14}>
                <div styleName="info-item"><span styleName="info-item-title">申请号</span>CN200810113789.6</div>
                <div styleName="info-item"><span styleName="info-item-title">公开号</span>IT（计算机相关）</div>
                <div styleName="info-item"><span styleName="info-item-title">专利权人</span>德信智能手机公司</div>
                <div styleName="info-item"><span styleName="info-item-title">主分类号</span>H04Q7/32</div>
                <div styleName="info-item"><span styleName="info-item-title">地址</span>北京市朝阳区酒仙桥北路甲10号D区2楼4-6层</div>
              </Col>
              <Col span={10}>
                <div styleName="info-item"><span styleName="info-item-title">申请日</span>2018-03-08</div>
                <div styleName="info-item"><span styleName="info-item-title">公开日</span>2018-03-16</div>
                <div styleName="info-item"><span styleName="info-item-title">发明人</span>吴彦祖</div>
                <div styleName="info-item"><span styleName="info-item-title">分类号</span>H04Q7/32</div>
                <div styleName="info-item"><span styleName="info-item-title">国省代码</span>中国，CN，北京</div>
              </Col>
            </Row>
          </div>
        </div>
        <Divider><span styleName="divider">摘要</span></Divider>
        <div styleName="content" style={{ textIndent: '28px' }}>
          每当我遇到自己不敢直视的困难时，我就会闭上双眼，想象自己是一个80岁的老人，为人生中曾放弃和逃避过的无数困难而懊悔不已，我会对自己说，能再年轻一次该有多好，然后我睁开眼睛：砰！我又年轻一次了！
        本发明公开了一种基于移动视窗平台的多卡手机网络连接选择方法及装置，该方法及装置通过预先在基于移动视窗平台的多卡手机的注册表中添加用于注册网络连接所使用的手机卡的键值，该键值的不同取值对应不同的手机卡；接收网络选择触发指令，提示用户每一张手机卡的网络状态；接收用户的选择指令，判断用户选择的手机卡与注册表中当前注册的网络连接使用的手机卡是否相同，若用户选择的手机卡与所述注册表中当前注册的网络连接使用的手机卡不同，则修改所述注册网络连接所使用的手机卡的键值，将用户选择的手机卡注册为网络连接使用的手机卡，使基于移动视窗平台的多卡手机可以在多张手机卡之间选择一张手机卡进行网络连接，实用性大为提高。
        </div>
        <Divider><span styleName="divider">转让者信息</span></Divider>
        <div styleName="content">
          <PartyInfo />
        </div>
        <Divider><span styleName="divider">相关下载</span></Divider>
        <div styleName="content">
          {this.state.download ? (
            <a href={this.state.download} >xxx.png</a>
          ) : (
            <div>暂无相关下载文件</div>
          )}
        </div>
        <Divider><span styleName="divider">转让公示</span></Divider>
        <div styleName="content">
          {/* <div style={{fontWeight: '600'}}>转让尚未完成</div> */}
          <IPTransferInfo />
        </div>
        <Divider><span styleName="divider">受让方信息</span></Divider>
        <div styleName="content">
          {/* <div style={{fontWeight: '600'}}>转让尚未完成</div> */}
          <PartyInfo />
        </div>
      </div >
    )
  }
}
