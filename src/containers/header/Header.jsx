// @flow
import React from 'react'
import logo from '../../logo.svg'
import './header.css'

const Header = () => (
  <header styleName="header">
    <img src={logo} styleName="logo" alt="logo" />
    <h1 styleName="title">Welcome to React</h1>
  </header>
)

export default Header
