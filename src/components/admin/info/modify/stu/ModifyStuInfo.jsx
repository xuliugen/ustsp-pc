import React from 'react'
import './modifyStuInfo.css'
import { Form, message } from 'antd'
import { StuInfoApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'
import { getPhotoRelativeUrl } from 'src/common/utils'

import { StuEduExp, StuBaseForm, StuResumeForm } from 'components/common/info'

@withRouter
@Form.create()
export default class ModifyStuInfo extends React.Component {
  state = {
    stuInfo: {},
    stuPhoto: null
  }

  constructor(props) {
    super(props)
    this.setStuPhoto = this.setStuPhoto.bind(this)
  }

  componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    const { data } = await StuInfoApi.getInfo(this.props.userId)
    this.setState({
      stuInfo: data.studentInfoDTO,
      stuPhoto: data.studentInfoDTO.photo
    })
  }

  setStuPhoto = (photo) => {
    this.setState({
      stuPhoto: photo
    })
  }

  handleModifyClick = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, value) => {
      if (!err) {
        let photo = getPhotoRelativeUrl(this.state.stuPhoto)
        const stuInfo = {
          id: this.props.userId,
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
          skill: value.skill ? value.skill.map(i => ({ skill: i })) : [],
          introduction: value.introduction,
          // isRealName: 'false',
          photo: photo
        }
        try {
          await StuInfoApi.updateInfo(stuInfo)
          message.success('修改成功')
          this.props.history.push('/admin/info/detail')
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
    return (
      <div styleName="root">
        <div styleName="title-wrapper">
          <span styleName="title">修改信息</span>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" styleName="baseInfo-form">
            <StuBaseForm
              mode="modify"
              form={this.props.form}
              stuInfo={this.state.stuInfo}
              stuPhoto={this.state.stuPhoto}
              setStuPhoto={this.setStuPhoto} />
            <StuResumeForm
              form={this.props.form}
              stuInfo={this.state.stuInfo} />
          </Form>
          <StuEduExp editable />
          <button onClick={this.handleModifyClick} styleName="confirm-button">确认修改</button>
        </div>
      </div>
    )
  }
}
