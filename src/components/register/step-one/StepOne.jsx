import React from 'react'
import './stepOne.css'
import { Button } from 'antd'

export default class StepOne extends React.Component<{}> {
  render() {
    return (
      <div styleName="container">
        <div styleName="title">step 1 : 填写基本信息</div>
        <form styleName="form">
          <div styleName="row">
            <select>
              <option value="1">1</option>
            </select>
          </div>
          <div styleName="row">
            <input />
          </div>
          <div styleName="row">
            <input />
          </div>
          <div styleName="row">
            <input />
          </div>
          <div styleName="row">
            <input />
          </div>
          <div styleName="row">
            <input />
          </div>
          <div styleName="row">
            <span>我已阅读并同意《UppFind用户注册协议》</span>
          </div>
          <div styleName="nextBtn-container">
            <button styleName="nextBtn">下一步</button>
            <Button type="primary">Primary</Button>
          </div>
        </form>
      </div>
    )
  }
}
