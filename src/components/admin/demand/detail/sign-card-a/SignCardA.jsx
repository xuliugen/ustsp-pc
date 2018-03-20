import React from 'react'
import { Icon, Avatar } from 'antd'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import './signCardA.css'

@withRouter
@inject('demandStore')
@observer
export default class SignCardA extends React.Component {
  showUserType(partyB) {
    let user = null
    if (partyB.partyType === 1) {
      user = '学生'
    } else if (partyB.partyType === 2) {
      user = '教师'
    } else if (partyB.partyType === 3) {
      user = '企业'
    }
    return user
  }

  handleSeeDetail(person) {
    let type = ''
    if (person.partyType === 1) {
      type = 'student'
    } else if (person.partyType === 2) {
      type = 'teacher'
    } else if (person.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.partyId}`)
  }

  render() {
    const { partyB, demand } = this.props.demandStore
    return (
      <div>
        <div styleName="title">待签单</div>
        <div styleName="content">
          <div styleName="desc">
            <Icon type="check-square" style={{ color: '#62f327' }} />&nbsp;&nbsp;
            已发起签单请求，等待乙方确认
          </div>
          <div styleName="applyer">
            <div styleName="applyer-title">
              承接对象
            </div>
            <div styleName="applyer-info">
              <div styleName="applyer-avatar" onClick={this.handleSeeDetail.bind(this, partyB)}>
                <Avatar src={partyB.partyAvatar} icon="user" />
                <span>&nbsp;&nbsp;{partyB.partyName}</span>
                {/* <Avatar icon={this.showRender().icon} size="small" styleName={this.showRender().styleName} /> */}
              </div>
              <span>{this.showUserType(partyB)} / {partyB.partyLocation}</span>
              <span>报名时间：{moment(demand.applyDate).format('YYYY-MM-DD HH:mm:ss')}</span>
              <span>签单时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
          </div>
          <div styleName="cancel">
            <p style={{marginBottom: '0.5em'}}>若对方长时间未确认，您可以申请撤回签单时间，项目回到报名状态继续报名</p>
            <a>申请撤销</a>
          </div>
        </div>
      </div>
    )
  }
}
