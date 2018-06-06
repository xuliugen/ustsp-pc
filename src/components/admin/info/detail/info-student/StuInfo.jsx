import React from 'react'
import StuBaseInfo from './stu-baseInfo/StuBaseInfo'
import StuProfile from './stu-profile/StuProfile'
import {Form} from 'antd'
import { StuInfoApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'
import './stuInfo.css'
import { StuEduExp } from 'components/common/info'

@inject('userStore')
@observer
export default class StuInfo extends React.Component {
  state = {
    userInfo: {},
    stuInfo: {}
  }

  componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    const { data } = await StuInfoApi.getInfo(this.props.uid)
    const newAvatar = data.studentInfoDTO.photo
    this.props.userStore.changeAvatar(newAvatar)
    this.setState({
      userInfo: data.userInfoDTO,
      stuInfo: data.studentInfoDTO
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="form-wrapper">
          <Form layout="vertical" >
            <StuBaseInfo userInfo={this.state.userInfo} stuInfo={this.state.stuInfo} />
            <StuProfile stuInfo={this.state.stuInfo} />
            <StuEduExp />
          </Form>
        </div>
      </div>
    )
  }
}
