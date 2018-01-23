import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './sidebar.css'
import { routes } from './routes'

const SubMenu = Menu.SubMenu

@withRouter
export default class Sidebar extends React.Component {
  state = {
    collased: false,
    openKeys: [],
    selectedKeys: []
  }

  constructor() {
    super()
    this.handleItemSelect = this.handleItemSelect.bind(this)
  }

  componentWillMount() {
    console.log(this.props.history)
    const { pathname } = this.props.history.location
    const route = pathname.split('/admin/')[1]
    if (!route) return
    const routeModule = route.split('/')[0]
    routes.forEach(({ key, children }) => {
      if (key === routeModule) {
        this.setState((pre) => ({
          openKeys: pre.openKeys.concat(key)
        }))
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
          defaultSelectedKeys={this.state.selectedKeys}
          defaultOpenKeys={this.state.openKeys}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={30}>
          {/* // onSelect={this.handleItemSelect}> */}
          {routes.map(({key, title, children}) => {
            const SubMenuIcon = title.icon ? <Icon type={title.icon} /> : null
            const MenuItems = children.map(({key, to, text}) => {
              const ItemLink = to ? <Link to={to}>{text}</Link> : <span>{text}</span>
              return (
                <Menu.Item key={key} style={{ fontSize: '18px' }}>{ItemLink}</Menu.Item>
              )
            })
            return (
              <SubMenu key={key} title={<span>{SubMenuIcon}<span style={{ fontSize: '18px' }}>{title.text}</span></span>}>
                {MenuItems}
              </SubMenu>
            )
          })}
        </Menu>
      </section>
    )
  }
}
