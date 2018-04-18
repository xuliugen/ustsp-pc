import React from 'react'
import './student.css'
import { Form, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { StuInfoApi } from 'src/ajax'
import { withRouter, Link } from 'react-router-dom'

import StuBaseInfo from './base-info/StuBaseInfo'
import StuPersonalExperience from './personal-experience/StuPersonalExperience'
import { StuEduExp } from 'components/common/info'
import SideNav from '../common/side-nav/SideNav'

@withRouter
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
          wechat: value.wechat,
          qq: value.qq,
          stuLevel: null,
          school: null,
          college: null,
          major: null,
          grade: null,
          skill: value.skill ? value.skill.map(i => ({skill: i})) : [],
          introduction: value.introduction,
          isRealName: 'false',
          photo: this.state.stuPhoto
        }
        try {
          await StuInfoApi.completeStuInfo(stuInfo)
          message.success('注册成功，进入下一步')
          this.props.history.push('/')
        } catch (e) {
          if (e.response) {
            message.error(e.response.data.message)
          }
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  render() {
    const navItems = ['基本信息', '教育经历', '个人履历']
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
            <StuEduExp editable containerRef={el => (el ? this.pos.Elements.push(el) : 1)} />
            <StuPersonalExperience containerRef={el => (el ? this.pos.Elements.push(el) : 1)} form={this.props.form} />
          </Form>
          <button styleName="confirm-button" onClick={this.handleClickConfirm} >确认</button>
          <SideNav navItems={navItems} pos={this.pos} />
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeStudent)
