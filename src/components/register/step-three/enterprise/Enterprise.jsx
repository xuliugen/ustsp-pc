// @flow
import React from 'react'
import './enterprise.css'
import EnterBaseInfo from './base-info/EnterBaseInfo'
import EnterOtherInfo from './other-info/EnterOtherInfo'
import SideNav from '../common/side-nav/SideNav'

export default class StepThreeEnterprise extends React.Component<{}> {
  constructor() {
    super()
    this.pos = {
      Elements: []
    }
  }

  render() {
    const navItems = ['基本信息', '其他信息']
    return (
      <div styleName="container" className="element-container" >
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container" >
          <EnterBaseInfo containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <EnterOtherInfo containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <div styleName="confirm-btn">
            <button>确认</button>
          </div>
          <SideNav navItems={navItems} pos={this.pos} />
        </div>
      </div>
    )
  }
}
