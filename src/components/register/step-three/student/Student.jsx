import React from 'react'
import './student.css'
import { Form, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { StuInfoApi } from 'src/ajax'

import StuBaseInfo from './base-info/StuBaseInfo'
import StuPersonalExperience from './personal-experience/StuPersonalExperience'
import StuEducationalExperience from './educational-experience/StuEducationalExperience'
import SideNav from '../common/side-nav/SideNav'

@inject('registerStore')
@observer
class StepThreeStudent extends React.Component<{}> {
  constructor() {
    super()
    this.pos = {
      Elements: []
    }
    this.state = {
      stuPhoto: null
    }
  }

  setStuPhoto = (photo) => {
    this.setState({
      stuPhoto: photo
    })
  }

  handleClickConfirm = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, value) => {
      if (!err) {
        const stuInfo = {
          id: this.props.registerStore.initial.uid,
          realName: value.realName,
          sex: value.sex,
          birth: value.birth ? value.birth.valueOf() : null,
          stuLevel: value.stuLevel,
          wechat: value.wechat,
          qq: value.qq,
          school: value.school,
          college: value.college,
          major: value.major,
          grade: 1,
          skill: value.skill,
          introduction: value.skill,
          isRealName: 'false',
          photo: this.state.stuPhoto
        }
        try {
          await StuInfoApi.completeStuInfo(stuInfo)
          message.success('注册成功，进入下一步')
        } catch (e) {
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  render() {
    const navItems = ['基本信息', '个人履历', '教育经历']
    return (
      <div styleName="container" className="element-container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <Link to="/" styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</Link>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" styleName="form-info">
            <StuBaseInfo
              containerRef={el => (el ? this.pos.Elements.push(el) : 1)}
              form={this.props.form}
              stuPhoto={this.state.stuPhoto}
              setStuPhoto={this.setStuPhoto} />
            <StuPersonalExperience containerRef={el => (el ? this.pos.Elements.push(el) : 1)} form={this.props.form} />
          </Form>
          <StuEducationalExperience containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
          <button styleName="confirm-button" onClick={this.handleClickConfirm} >确认</button>
          <SideNav navItems={navItems} pos={this.pos} />
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeStudent)
