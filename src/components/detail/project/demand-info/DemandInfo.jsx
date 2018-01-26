import React from 'react'
import './demandInfo.css'
import Header from './header/Header'
import PartAInfo from './partA-info/PartAInfo'
import DownloadFile from './download-file/DownloadFile'
import ImgEye from '../../../../assets/ico_eye.png'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { ProjectApi } from 'src/ajax'
import { message } from 'antd'

@withRouter
@inject('userStore')
@observer
export default class DemandInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      ownerId: ''
    }
  }
  componentDidMount() {
    console.log(this.props.userStore.user)
    console.log(this.props.match.params.id)
    this.getApplicationDetail()
  }

  getApplicationDetail = async () => {
    try {
      const { data } = await ProjectApi.getApplicationDetail('134af19441fe438d9f951541d8f3b66b')
      console.log(data.projectInfoVo.projectResearchInfo.ownerId)
      this.setState({
        ownerId: data.projectInfoVo.projectResearchInfo.ownerId
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleSighUp = async () => {
    try {
      const user = this.props.userStore.user
      const projectJoin = {
        projectId: '134af19441fe438d9f951541d8f3b66b',
        ownerId: this.state.ownerId,
        partyId: user.id,
        status: 1,
        partyAvatar: user.avatar,
        partyName: user.realName,
        partySex: 1,
        partyType: user.userType,
        partyLocation: '成都',
        partyContact: user.email || user.phone || user.wechat || user.qq || '',
        date: new Date().getTime()
      }
      await ProjectApi.signUpInfo(projectJoin)
      message.success('报名成功')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="demand-info">
        <div styleName="name-card">
          <div styleName="card-title">
            <div>
              <div styleName="name">学生签到系统开发平台及APP</div>
              <div styleName="other">
                <span>发布于 2017-12-24</span>
                <span styleName="visit-num"><img src={ImgEye} /> 1145</span>
              </div>
            </div>
            {this.props.userStore.isLogin ? (
              <div>
                <button styleName="sign-up" onClick={this.handleSighUp}>我要报名</button>
                <button styleName="follow">关注</button>
              </div>) : null}
          </div>
          <div styleName="content">
            <ul styleName="left">
              <li><span styleName="list-title">需求类型</span>工程开发</li>
              <li><span styleName="list-title">需求学科</span>IT（计算机相关）</li>
              <li><span styleName="list-title">需求专业</span>移动应用</li>
              <li><span styleName="list-title">预设金额</span>¥12000</li>
            </ul>
            <ul styleName="right">
              <li><span styleName="list-title">对接倾向</span>不限</li>
              <li><span styleName="list-title">开始时间</span>2017-12-29</li>
              <li><span styleName="list-title">结束时间</span>2018-01-29</li>
              <li><span styleName="list-title">报名截止</span>2018-01-01</li>
            </ul>
          </div>
        </div>
        <div styleName="demand-intr">
          <Header title="需求信息描述" />
          <div styleName="intr-content">
            描述
          </div>
        </div>
        <div styleName="skill">
          <Header title="技能要求" />
          <div styleName="skill-content">
            <button>UI设计</button>
            <button>项目策划</button>
            <button>后台管理</button>
          </div>
        </div>
        <div styleName="PartAInfo">
          <Header title="甲方信息" />
          <div styleName="PartAInfo-content">
            {this.props.userStore.isLogin ? <PartAInfo /> : (
              <div style={{ fontSize: '16px', color: '#666' }}>您当前的身份为游客，需要登陆才能查看甲方信息</div>
            )}
          </div>
        </div>
        <div styleName="download">
          <Header title="相关下载" />
          <div styleName="download-content">
            {this.props.userStore.isLogin ? <DownloadFile /> : (
              <div style={{ fontSize: '16px', color: '#666' }}>您当前的身份为游客，需要登陆才能查看甲方信息</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
