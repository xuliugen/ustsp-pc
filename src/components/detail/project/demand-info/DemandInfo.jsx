import React from 'react'
import './demandInfo.css'
import Header from './header/Header'
import PartAInfo from './partA-info/PartAInfo'
import DownloadFile from './download-file/DownloadFile'
import ImgEye from '../../../../assets/ico_eye.png'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { ProjectApi } from 'src/ajax'
import { message, Spin } from 'antd'
import moment from 'moment'

@withRouter
@inject('userStore')
@observer
export default class DemandInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      demandDetail: {},
      skills: [],
      ownerInfo: {},
      upload: null,
      signUpBtn: {
        msg: '我要报名',
        loading: false,
        disable: false
      },
      followBtn: {
        msg: '关注',
        loading: false,
        disable: false
      }
    }
  }
  componentDidMount() {
    this.getApplicationDetail()
  }

  getApplicationDetail = async () => {
    try {
      const { data } = await ProjectApi.getApplicationDetail(this.props.match.params.id, this.props.userStore.user ? this.props.userStore.user.id : '')
      const projectInfo = data.projectInfoVo.projectResearchInfo
      const projectSkill = data.projectInfoVo.projectSkillList

      // 项目详细信息
      this.setState({
        demandDetail: {
          name: projectInfo.projectName,
          releaseTime: projectInfo.releaseTime,
          view: projectInfo.projectView,
          type: projectInfo.type,
          subject: projectInfo.subject,
          major: projectInfo.major,
          money: projectInfo.money,
          toOriented: projectInfo.toOriented,
          startTime: projectInfo.startTime,
          endTime: projectInfo.endTime,
          deadline: projectInfo.deadline,
          demandIntr: projectInfo.projectIntroduction
        }
      })

      // 相关下载信息
      if (projectInfo.uploadfileUrl) {
        this.setState({
          upload: {
            uploadFileName: projectInfo.uploadfileName,
            uploadFileUrl: projectInfo.uploadfileUrl
          }
        })
      }

      // 技能要求信息
      this.setState({
        skills: projectSkill
      })

      // 甲方信息
      this.setState({
        ownerInfo: {
          ownerId: projectInfo.ownerId,
          name: data.ownerName,
          location: data.ownerLocation,
          avatar: data.ownerAvatarUrl,
          type: data.ownerType,
          contact: projectInfo.contactWay
        }
      })

      // 报名状态
      if (data.dockingStatus !== 0) this.setState({ signUpBtn: { msg: '已报名', loading: false, disable: true } })
    } catch (e) {
      console.log(e)
    }
  }

  handleSighUp = async () => {
    if (this.props.userStore.user.id === this.state.ownerInfo.ownerId) {
      message.warning('发布者不可以报名')
      return
    }
    try {
      const user = this.props.userStore.user
      const projectJoin = {
        projectId: this.props.match.params.id,
        ownerId: this.state.ownerInfo.ownerId,
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
      this.setState((prevState) => ({
        signUpBtn: { ...prevState.signUpBtn, loading: true }
      }))
      await ProjectApi.signUpInfo(projectJoin)
      message.success('报名成功')
      this.setState({
        signUpBtn: { msg: '已报名', loading: false, disable: true }
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const demandDetail = this.state.demandDetail

    return (
      <div styleName="demand-info">
        <div styleName="name-card">
          <div styleName="card-title">
            <div>
              <div styleName="name">{demandDetail.name}</div>
              <div styleName="other">
                <span>发布于 {moment(demandDetail.releaseTime).format('YYYY-MM-DD')}</span>
                <span styleName="visit-num"><img src={ImgEye} /> {demandDetail.view}</span>
              </div>
            </div>
            {this.props.userStore.isLogin ? (
              <div>
                <div style={{ display: 'inline-block' }}>
                  <Spin spinning={this.state.signUpBtn.loading}>
                    <button styleName="sign-up" onClick={this.handleSighUp} disabled={this.state.signUpBtn.disable} >{this.state.signUpBtn.msg}</button>
                  </Spin>
                </div>
                <div style={{ display: 'inline-block' }}>
                  <Spin spinning={this.state.followBtn.loading}>
                    <button styleName="follow">{this.state.followBtn.msg}</button>
                  </Spin>
                </div>
              </div>) : null}
          </div>
          <div styleName="content">
            <ul styleName="left">
              <li><span styleName="list-title">需求类型</span>{demandDetail.type}</li>
              <li><span styleName="list-title">需求学科</span>{demandDetail.subject}</li>
              <li><span styleName="list-title">需求专业</span>{demandDetail.major}</li>
              <li><span styleName="list-title">预设金额</span>¥{demandDetail.money}</li>
            </ul>
            <ul styleName="right">
              <li><span styleName="list-title">对接倾向</span>{demandDetail.toOriented}</li>
              <li><span styleName="list-title">开始时间</span>{demandDetail.startTime ? moment(demandDetail.startTime).format('YYYY-MM-DD') : '暂无'}</li>
              <li><span styleName="list-title">结束时间</span>{demandDetail.endTime ? moment(demandDetail.endTime).format('YYYY-MM-DD') : '暂无'}</li>
              <li><span styleName="list-title">报名截止</span>{demandDetail.deadline ? moment(demandDetail.deadline).format('YYYY-MM-DD') : '暂无'}</li>
            </ul>
          </div>
        </div>
        <div styleName="demand-intr">
          <Header title="需求信息描述" />
          <div styleName="intr-content">
            {demandDetail.demandIntr}
          </div>
        </div>
        <div styleName="skill">
          <Header title="技能要求" />
          <div styleName="skill-content">
            {this.state.skills ? this.state.skills.map((it, idx) => {
              return (
                <button key={idx}>{it.skill}</button>
              )
            }) : '暂无要求'}
          </div>
        </div>
        <div styleName="PartAInfo">
          <Header title="甲方信息" />
          <div styleName="PartAInfo-content">
            {this.props.userStore.isLogin ? <PartAInfo ownerInfo={this.state.ownerInfo} /> : (
              <div style={{ fontSize: '16px', color: '#666' }}>您当前的身份为游客，需要登陆才能查看甲方信息</div>
            )}
          </div>
        </div>
        <div styleName="download">
          <Header title="相关下载" />
          <div styleName="download-content">
            {this.props.userStore.isLogin ? <DownloadFile download={this.state.upload} /> : (
              <div style={{ fontSize: '16px', color: '#666' }}>您当前的身份为游客，需要登陆才能查看甲方信息</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
