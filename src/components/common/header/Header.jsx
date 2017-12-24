// @flow
import React from 'react'
import logo from 'src/assets/logo.png'
import './header.css'

// const Header = () => (
//   <header styleName="header">
//     <img src={logo} styleName="logo" alt="logo" />
//     <h1 styleName="title">Welcome to React</h1>
//   </header>
// )

class Header extends React.PureComponent<{}> {
  render() {
    return (
      <header>
        <img src={logo} />
      </header>
    )
  }
}

export default Header
