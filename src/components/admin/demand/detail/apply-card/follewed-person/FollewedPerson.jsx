import React from 'react'
import './follewedPerson.css'
import { Avatar } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class FollewedPerson extends React.Component {
  showRender = () => {
    let renderStyle = null

    if (this.props.follewedPerson.followerSex === 1) {
      renderStyle = {
        icon: 'man',
        styleName: 'render-man'
      }
    } else {
      renderStyle = {
        icon: 'woman',
        styleName: 'render-woman'
      }
    }

    return renderStyle
  }

  showUserType = () => {
    const { followerType } = this.props.follewedPerson
    let user = null
    if (followerType === 1) {
      user = '学生'
    } else if (followerType === 2) {
      user = '教师'
    } else if (followerType === 3) {
      user = '企业'
    }
    return user
  }

  handleSeeDetailClick = (person) => {
    let type = ''
    if (person.followerType === 1) {
      type = 'student'
    } else if (person.followerType === 2) {
      type = 'teacher'
    } else if (person.followerType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.followerId}`)
  }

  render() {
    return (
      <div styleName="person-item">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar
            src={this.props.follewedPerson.followerAvatar}
            icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, this.props.follewedPerson)}>{this.props.follewedPerson.followerName }</span>
          <Avatar icon={this.showRender().icon} size="small" styleName={this.showRender().styleName} />
        </div>
        <span styleName="person-info">{this.showUserType()} / {this.props.follewedPerson.followerLocation }</span>
      </div>
    )
  }
}
