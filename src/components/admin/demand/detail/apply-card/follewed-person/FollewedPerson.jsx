import React from 'react'
import './follewedPerson.css'
import { Avatar } from 'antd'

export default class FollewedPerson extends React.Component {
  showRender = () => {
    let renderStyle = null

    // if (this.props.registeredPerson.render === '男') {
    // renderStyle = {
    //   icon: 'man',
    //   styleName: 'render-man'
    // }
    // } else {
    //   renderStyle = {
    //     icon: 'woman',
    //     styleName: 'render-woman'
    //   }
    // }
    renderStyle = {
      icon: 'woman',
      styleName: 'render-woman'
    }
    return renderStyle
  }

  render() {
    return (
      <div styleName="person-item">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar
            // src='this.props.registeredPerson.avatar'
            icon="user" />
          <span styleName="name">钟爽{/* this.props.registeredPerson.name */}</span>
          <Avatar icon={this.showRender().icon} size="small" styleName={this.showRender().styleName}>男</Avatar>

        </div>
        <span styleName="person-info">{/* this.props.registeredPerson.userType */}学生 / {/* this.props.registeredPerson.school */}西南财经大学 /</span>
      </div>
    )
  }
}
