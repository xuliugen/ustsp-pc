import React from 'react'
import StuBaseInfo from './stu-baseInfo/StuBaseInfo'
import StuProfile from './stu-profile/StuProfile'
import {Form} from 'antd'
import { StuInfoApi } from 'src/ajax'
import './stuInfo.css'

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
    this.setState({
      userInfo: data.userInfoDTO,
      stuInfo: data.studentInfoDTO
    })
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form-wrapper">
          <Form layout="vertical" >
            <StuBaseInfo userInfo={this.state.userInfo} stuInfo={this.state.stuInfo} />
            <StuProfile stuInfo={this.state.stuInfo} />
          </Form>
        </div>
      </div>
    )
  }
}
