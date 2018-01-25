import React from 'react'
import './project.css'

import { Header, Footer } from 'components/common'

export default class Project extends React.Component {
  state = {
    pid: this.props.match.params.id
  }

  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="mid-container" className="clearfix">
          <div styleName="nav-container">
            nav
          </div>
          <main styleName="left-container">
            123
          </main>
          <div styleName="right-container">
            456
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
