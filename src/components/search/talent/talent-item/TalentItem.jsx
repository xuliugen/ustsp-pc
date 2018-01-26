import React from 'react'
import './talentItem.css'
import { Avatar, Icon } from 'antd'
import authorityPic from './authority.png'
export default class talentItem extends React.Component {
  render() {
    return (
      <div styleName="talent-item">
        <div styleName="talent-info">
          <Avatar shape="square" size="large"
            style={{width: '80px', height: '80px'}}
          // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <div styleName="info-text">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span styleName="talent-name">张俪</span>
              <img size="small" src={authorityPic} style={{marginLeft: '9px'}} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <span styleName="school-info">电子科技大学 / 副教授</span>
              <span styleName="major">计算技术研究所 / 电子信息系 </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '11px' }}>
              <Icon type="eye" styleName="visible-icon" />
              <span styleName="visible-person-number">1415</span>
            </div>
          </div>
        </div>
        <button styleName="add-friend">+ 加好友</button>
      </div>
    )
  }
}
