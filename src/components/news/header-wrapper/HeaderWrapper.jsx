import React from 'react'
import './headerWrapper.css'
import moment from 'moment'
import iconEye from 'src/assets/ico_eye.png'

export default class NewsHeaderWrapper extends React.Component {
  render() {
    return (
      <div styleName="header-wrapper">
        <div styleName="header-inner">
          <div styleName="title">{this.props.title}</div>
          <div styleName="info">
            <div styleName="publisher">
              <div>
                <img styleName="avatar" src={this.props.publisher.userInfo.avatar} />
              </div>
              <div styleName="pub-wrapper">
                <div>发布人</div>
                <div>{this.props.publisher.username}</div>
              </div>
              <div styleName="add-wrapper">
                <button styleName="add-btn">+ 好友</button>
              </div>
            </div>
            <div styleName="other">
              <span styleName="view">
                <img src={iconEye} />
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
