import React from 'react'
import './demandInfo.css'
import Header from './header/Header'
import PartAInfo from './partA-info/PartAInfo'
import DownloadFile from './download-file/DownloadFile'
import ImgEye from '../../../../assets/ico_eye.png'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
export default class DemandInfo extends React.Component {
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
                <button styleName="sign-up">我要报名</button>
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
