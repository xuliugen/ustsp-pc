import React from 'react'
// import imgSystem from 'src/assets/systemIcon.png'
import './msgItem.css'
import { withRouter } from 'react-router-dom'
import { MessageApi } from 'src/ajax'
import moment from 'moment'
import { observer, inject } from 'mobx-react'

@inject('msgStore')
@observer
@withRouter
export default class MsgItem extends React.Component {
  async handleClick() {
    try {
      await MessageApi.fetchOneMessage(this.props.item.id)
      const demandType = this.setDemandType(this.props.item.messageType)
      this.props.history.push(`/admin/demand/${demandType}/${this.props.item.relateId}`)
      this.props.msgStore.dispatchGetCounts()
    } catch (error) {
      console.log(error)
    }
  }

  setDemandType(type) {
    // 21 甲方发给乙方 22 乙方发给甲方
    switch (type) {
      case 21:
        return 'undertaken-demand'
      case 22:
        return 'published-demand'
      default:
        break
    }
  }

  render() {
    const { item } = this.props
    return (
      <div styleName="root">
        <img src={item.senderAvatar} styleName="avatar" />
        <div styleName="news-info">
          <div>
            <span>{item.messageContent}</span>
            <span styleName="time">{moment(item.createTime).format('YYYY-MM-DD HH:mm')}</span>
          </div>
          <div onClick={this.handleClick.bind(this)} style={{ marginTop: '10px', cursor: 'pointer', color: (item.status === 2 ? '#3091e6' : '') }}>
            项目有了新进度，请注意查看！
          </div>
        </div>
      </div>
    )
  }
}
