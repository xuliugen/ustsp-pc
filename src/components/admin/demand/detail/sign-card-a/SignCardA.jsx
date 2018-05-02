import React from 'react'
import { Icon, Avatar, message, Modal } from 'antd'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import './signCardA.css'
import { DemandApi } from 'src/ajax'

const confirm = Modal.confirm

@withRouter
@inject('demandStore', 'userStore')
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

  handleCancel(partyB) {
    confirm({
      title: '确定要撤销签单请求吗？',
      content: '点击cancel即可刷新状态',
      onOk: async () => {
        try {
          await DemandApi.changeDemandStatus({
            currentUserId: this.props.userStore.user.id,
            partyId: partyB.partyId,
            ownerId: this.props.userStore.user.id,
            projectId: this.props.match.params.id,
            status: 'cancelSigningA'
          })
          message.success('撤销签单成功')
          // 刷新项目信息
          this.props.demandStore.dispatchGetDemandInfo()
        } catch (error) {
          console.log(error)
        }
      },
      onCancel: () => {
        this.props.demandStore.dispatchGetDemandInfo()
      }
    })
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
            <p style={{ marginBottom: '0.5em' }}>若对方长时间未确认，您可以申请撤回签单时间，项目回到报名状态继续报名</p>
            <a onClick={this.handleCancel.bind(this, partyB)}>申请撤销</a>
          </div>
        </div>
      </div>
    )
  }
}
