import React from 'react'
import './student.css'
import StuBaseInfo from './base-info/StuBaseInfo'
import StuPersonalExperience from './personal-experience/StuPersonalExperience'
import StuEducationalExperience from './educational-experience/StuEducationalExperience'
import SideNav from '../common/side-nav/SideNav'

export default class StepThree extends React.Component<{}> {
  constructor() {
    super()
    this.pos = {
      Elements: []
    }
  }

  render() {
    const navItems = ['基本信息', '个人履历', '教育经历']
    return (
      <div styleName="container" className="element-container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <StuBaseInfo containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <StuPersonalExperience containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <StuEducationalExperience containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <button styleName="confirm-button">确认</button>
          <SideNav navItems={navItems} pos={this.pos} />
        </div>
      </div>
    )
  }
}
