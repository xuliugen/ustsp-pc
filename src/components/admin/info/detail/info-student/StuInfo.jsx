import React from 'react'
import StuBaseInfo from './stu-baseInfo/StuBaseInfo'
import StuProfile from './stu-profile/StuProfile'
import {Form} from 'antd'
import './stuInfo.css'

export default class StuInfo extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <div styleName="form-wrapper">
          <Form layout="verticle" >
            <StuBaseInfo />
            <StuProfile />
          </Form>
        </div>
      </div>
    )
  }
}
