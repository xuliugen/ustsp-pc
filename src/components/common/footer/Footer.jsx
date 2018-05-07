// @flow
import React from 'react'
import './footer.css'
import imgLogo from 'src/assets/logo.png'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('searchStore')
@observer
export default class Footer extends React.Component<{}> {
  render() {
    const { searchStore } = this.props
    const curYear = new Date().getFullYear()
    const contactTel = '182-1563-1320'
    return (
      <footer styleName="footer">
        <div styleName="footer-nav">
          <a>
            <img styleName="footer-logo" src={imgLogo} />
          </a>
          <Link to="/search" onClick={() => { searchStore.setType('talent') }}>人才</Link>
          <Link to="/search" onClick={() => { searchStore.setType('project') }}>项目</Link>
          <Link to="/search" onClick={() => { searchStore.setType('ip') }}>知识产权</Link>
          <Link to="/search" onClick={() => { searchStore.setType('news') }}>动态</Link>
          {/* <a>创业资源</a>
          <a>高校科技资源</a>
          <a>公司简介</a>
          <a>版权声明</a> */}
          <a href={`tel:${contactTel}`}>服务热线 {contactTel}</a>
        </div>
        <div styleName="copyright">
          蜀ICP备16025509号 Copyright©2016-<span>{curYear}</span> 成都UppFind
        </div>
      </footer>
    )
  }
}
