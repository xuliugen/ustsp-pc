import React from 'react'
import './headerWrapper.css'
import moment from 'moment'
import iconEye from 'src/assets/ico_eye.png'
import AddFriendBtn from './add-friend-btn/AddFriendBtn'
import { userTypeNumToStr } from 'src/common/formatter'
import { Link } from 'react-router-dom'

export default class NewsHeaderWrapper extends React.Component {
  render() {
    const userType = userTypeNumToStr(this.props.publisher.userType)
    const userId = this.props.userId

    return (
      <div styleName="header-wrapper">
        <div styleName="header-inner">
          <div styleName="title">{this.props.title}</div>
          <div styleName="info">
            <div styleName="publisher">
              <Link to={`/${userType}/${userId}`}>
                <img styleName="avatar" src={this.props.publisher.avatar} />
              </Link>
              <div styleName="pub-wrapper">
                <div>发布人</div>
                <div>{this.props.publisher.username}</div>
              </div>
              <div styleName="add-wrapper">
                <AddFriendBtn info={this.props.publisher} />
              </div>
            </div>
            <div styleName="other">
              <span styleName="view">
                <img src={iconEye} style={{ marginRight: '5px' }} />
                {this.props.view}
              </span>
              <span>
                发布于&nbsp;
                {moment(this.props.date).format('YYYY-MM-DD')}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
