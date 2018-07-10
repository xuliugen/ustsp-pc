import React from 'react'
import { inject, observer } from 'mobx-react'
import moment from 'moment'
import './postDetail.css'
import { MessageApi, PushApi } from 'src/ajax'

@inject('userStore')
@observer
export default class PostDetail extends React.Component {
  state = {
    manager: '',
    notification: ''
  }
  componentDidMount() {
    this.getDetail(this.props.match.url.match('message') ? 'message' : 'push')
  }

  async getDetail(type) {
    let data = null
    if (type === 'message') {
      data = await MessageApi.getPostMsgDetail(this.props.match.params.id)
    } else {
      data = await PushApi.fetchRecordDetail(this.props.match.params.id, this.props.userStore.user.id)
    }
    console.log(data)
    this.setState({
      notification: data.data.notification,
      manager: data.data.manager
    })
  }

  render() {
    const { manager, notification } = this.state
    return (
      <div styleName="root">
        <div styleName="header-wrapper">
          <div styleName="header">
            <div styleName="title">{notification.title}</div>
            <div styleName="info">
              <div styleName="sender">
                <img styleName="avatar" src={manager.photo} />
                <div styleName="sender-wrapper">
                  <div>发布人</div>
                  <div>{manager.realName}</div>
                </div>
              </div>
              <div>发布于&nbsp;{moment(notification.createTime).format('YYYY-MM-DD')}</div>
            </div>
          </div>
        </div>
        <div styleName="content">
          <div dangerouslySetInnerHTML={{ __html: notification.content }} />
        </div>
      </div>
    )
  }
}
