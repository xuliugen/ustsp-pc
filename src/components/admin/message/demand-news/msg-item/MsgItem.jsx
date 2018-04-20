import React from 'react'
// import imgSystem from 'src/assets/systemIcon.png'
import './msgItem.css'
import { withRouter } from 'react-router-dom'
import { MessageApi } from 'src/ajax'
import moment from 'moment'

@withRouter
export default class MsgItem extends React.Component {
  async handleClick() {
    try {
      await MessageApi.fetchOneMessage(this.props.item.id)
      const demandType = this.props.party === 'owner' ? 'published-demand' : 'undertaken-demand'
      this.props.history.push(`/admin/demand/${demandType}/${this.props.item.relateId}`)
    } catch (error) {
      console.log(error)
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
          <div onClick={this.handleClick.bind(this)} style={{marginTop: '10px', cursor: 'pointer', color: (item.status === 2 ? '#3091e6' : '')}}>
            项目有了新进度，请注意查看！
          </div>
        </div>
      </div>
    )
  }
}
