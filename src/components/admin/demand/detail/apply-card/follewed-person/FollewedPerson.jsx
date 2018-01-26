import React from 'react'
import './follewedPerson.css'
import { Avatar } from 'antd'

export default class FollewedPerson extends React.Component {
  showRender = () => {
    let renderStyle = null

    if (this.props.registeredPerson.partySex === 1) {
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
    let user = null
    if (this.props.registeredPerson.userType === 1) {
      user = '学生'
    } else if (this.props.registeredPerson.userType === 2) {
      user = '教师'
    } else if (this.props.registeredPerson.userType === 3) {
      user = '企业'
    }
    return user
  }

  render() {
    return (
      <div styleName="person-item">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar
            src={this.props.registeredPerson.partyAvatar}
            icon="user" />
          <span styleName="name">{this.props.registeredPerson.partyName }</span>
          <Avatar icon={this.showRender().icon} size="small" styleName={this.showRender().styleName} />
        </div>
        <span styleName="person-info">{this.showUserType()} / {this.props.registeredPerson.partyLocation } /</span>
      </div>
    )
  }
}
