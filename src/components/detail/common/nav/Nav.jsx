// @flow
import React from 'react'
import { Menu } from 'antd'
import './nav.css'

export default class Nav extends React.Component<{}> {
  render() {
    return (
      <Menu styleName="nav-menu" mode="inline" defaultOpenKeys={['1']}>
        <Menu.Item key="1">
          <span styleName="menu-info">基本信息</span>
        </Menu.Item>
        <Menu.Item styleName="menu-info" key="2">
          <span styleName="menu-info">TA参与的平台项目</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span styleName="menu-info">个人简介</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span styleName="menu-info">教育经历</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span styleName="menu-info">获奖经历</span>
        </Menu.Item>
        <Menu.Item key="6">
          <span styleName="menu-info">项目经验</span>
        </Menu.Item>
      </Menu>
    )
  }
}
