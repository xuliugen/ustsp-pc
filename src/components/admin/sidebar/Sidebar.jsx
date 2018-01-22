import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './sidebar.css'

const SubMenu = Menu.SubMenu

@withRouter
export default class Sidebar extends React.Component {
  state = {
    collased: false
  }

  constructor() {
    super()
    this.handleItemSelect = this.handleItemSelect.bind(this)
  }

  handleItemSelect({ key }) {
    const { history } = this.props
    switch (key) {
      case 'demand-new':
        history.push('/admin/demand/new-demand')
        break
      default:
        break
    }
  }

  render() {
    return (
      <section styleName="sidebar-inner">
        <Menu
          styleName="sidebar"
          // defaultSelectedKeys={['5']}
          defaultOpenKeys={['info']}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={30}
          onSelect={this.handleItemSelect}>
          <SubMenu key="info" title={<span><Icon type="user" /><span style={{ fontSize: '18px' }}>个人信息</span></span>}>
            <Menu.Item key="info-detail" style={{ fontSize: '18px' }}>信息查看</Menu.Item>
            <Menu.Item key="info-mod" style={{ fontSize: '18px' }}>修改信息</Menu.Item>
            <Menu.Item key="info-security" style={{ fontSize: '18px' }}>修改密码</Menu.Item>
          </SubMenu>
          <SubMenu key="demand" title={<span><Icon type="check-square-o" /><span style={{ fontSize: '18px' }}>需求对接</span></span>}>
            <Menu.Item key="demand-new" style={{ fontSize: '18px' }}>发起新需求</Menu.Item>
            <Menu.Item key="demand-publish" style={{ fontSize: '18px' }}>已发布的需求</Menu.Item>
            <Menu.Item key="demand-process" style={{ fontSize: '18px' }}>已报名/已承接的需求</Menu.Item>
          </SubMenu>
        </Menu>
      </section>
    )
  }
}
