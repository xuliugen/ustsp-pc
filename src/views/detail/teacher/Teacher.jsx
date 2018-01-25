import React from 'react'
import { Header, Footer } from 'components/common'
import './teacher.css'
import Similar from 'components/detail/common/similar/Similar'
import Friend from 'components/detail/common/friend/Friend'
import Others from 'components/detail/common/others/Others'
import Nav from 'components/detail/teacher/nav/Nav'

export default class Teacher extends React.Component {
  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="inf-container">
          <Nav />
          <div styleName="inf-more">
            <Similar />
            <Friend />
            <Others />
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
