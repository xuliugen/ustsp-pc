import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu, Icon, Badge } from 'antd'
import './sidebar.css'
import { routes } from './routes'
import { observer, inject } from 'mobx-react'

const SubMenu = Menu.SubMenu

@withRouter
@inject('msgStore')
@observer
export default class Sidebar extends React.Component {
  state = {
    collased: false,
    openKeys: [],
    selectedKeys: []
  }

  setKeys(pathname) {
    const route = pathname.split('/admin/')[1]
    if (!route) return
    const routeModule = route.split('/')[0]
    routes.forEach(({ key, children }) => {
      if (key === routeModule) {
        // this.setState((pre) => ({
        //   openKeys: pre.openKeys.concat(key)
        // }))
        this.setState({
          openKeys: [key]
        })
      }
      const routeChild = route.split('/')[1]
      if (routeChild) {
        children.forEach(({ key }) => {
          if (key === routeChild) {
            this.setState({
              selectedKeys: [key]
            })
          }
        })
      }
    })
  }

  handleSubMenuClick = ({key}) => {
    this.setState(pre => {
      if (pre.openKeys.includes(key)) {
        let openKeys = pre.openKeys
        openKeys.splice(pre.openKeys.findIndex(e => e === key), 1)
        return {
          openKeys: openKeys
        }
      } else {
        return {
          openKeys: pre.openKeys.concat(key)
        }
      }
    })
  }

  componentWillMount() {
    const { pathname } = this.props.history.location
    this.setKeys(pathname)
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.history.location
    this.setKeys(pathname)
  }

  render() {
    const { msgStore } = this.props
    return (
      <section styleName="sidebar-inner">
        <Menu
          styleName="sidebar"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={30}>
          {/* // onSelect={this.handleItemSelect}> */}
          {routes.map(({key, title, children}) => {
            const SubMenuIcon = title.icon ? <Icon type={title.icon} /> : null
            let MenuItems
            if (key !== 'message') {
              MenuItems = children.map(({ key, to, text }) => {
                const ItemLink = to ? <Link to={to}>{text}</Link> : <span>{text}</span>
                return (
                  <Menu.Item key={key} style={{ fontSize: '18px' }}>{ItemLink}</Menu.Item>
                )
              })
            } else {
              MenuItems = children.map(({ key, to, text, type }) => {
                const count = msgStore[type]
                console.log(type, count)
                const ItemLink = to ? <Link to={to}>{text}</Link> : <span>{text}</span>
                return (
                  <Menu.Item key={key} style={{ fontSize: '18px', position: 'relative' }}>
                    {ItemLink}
                    <div style={{ position: 'absolute', top: '-2px', left: '135px' }}>
                      <Badge count={count} />
                    </div>
                  </Menu.Item>
                )
              })
            }
            return (
              <SubMenu
                key={key}
                title={<span>{SubMenuIcon}<span style={{ fontSize: '18px' }}>{title.text}</span></span>}
                onTitleClick={this.handleSubMenuClick}>
                {MenuItems}
              </SubMenu>
            )
          })}
        </Menu>
      </section>
    )
  }
}
