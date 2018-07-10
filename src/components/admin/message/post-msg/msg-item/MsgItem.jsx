import React from 'react'
// import ImgSystem from 'src/assets/systemIcon.png'
import { withRouter } from 'react-router-dom'
import './msgItem.css'
import moment from 'moment'
import { MessageApi } from 'src/ajax'

@withRouter
export default class MsgItem extends React.Component {
  handleSeeDetail = async () => {
    try {
      await MessageApi.fetchOneMessage(this.props.item.id)
      this.props.history.push(`/admin/message/post-msg/${this.props.item.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { item } = this.props
    return (
      <div styleName="root">
        <img src={item.senderAvatar} styleName="avatar" />
        <div styleName="msg-info">
          <div>
            <span>您收到一条站内信</span>
            <span styleName="time">{moment(item.createTime).format('YYYY-MM-DD HH:mm')}</span>
          </div>
          <div onClick={this.handleSeeDetail.bind(this, item.messageType)} style={{ marginTop: '10px', cursor: 'pointer', color: item.status === 2 ? '#3091e6' : '' }} >
            <span style={{ color: '#3091e6', marginRight: '15px' }}>{item.senderName}</span>给您发来一条站内信
          </div>
        </div>
      </div>
    )
  }
}
