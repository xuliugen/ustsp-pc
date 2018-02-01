import React from 'react'
import { Link } from 'react-router-dom'
import './talentItem.css'
import { Avatar, Icon } from 'antd'
import authorityPic from './authority.png'

export default class talentItem extends React.Component {
  render() {
    const talent = this.props.talent
    let url = ''
    switch (parseInt(talent.type)) {
      case 1:
        url = `/student/${talent.id}`
        break
      case 2:
        url = `/teacher/${talent.id}`
        break
    }
    return (
      <div styleName="talent-item">
        <div styleName="talent-info">
          <Link to={url}>
            <Avatar src={talent.photo} shape="square" size="large" style={{ width: '80px', height: '80px' }} />
          </Link>
          <div styleName="info-text">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Link to={url}><span styleName="talent-name">{talent.realName}</span></Link>
              <img size="small" src={authorityPic} style={{marginLeft: '9px'}} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <span styleName="school-info">{talent.school} / {talent.title}</span>
              <span styleName="major">{talent.college} / {talent.major} </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '11px' }}>
              <Icon type="eye" styleName="visible-icon" />
              <span styleName="visible-person-number">{talent.pageView}</span>
            </div>
          </div>
        </div>
        <button styleName="add-friend">+ 加好友</button>
      </div>
    )
  }
}
