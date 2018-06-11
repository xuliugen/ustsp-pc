import React from 'react'
import { Header, Footer } from 'components/common'
import { Carousel, Search, Talent, Project, News, IP } from 'components/home'
import './home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div>
          <Carousel />
          <main styleName="main">
            <Search />
            <Talent />
            <div styleName="pn-container">
              <div styleName="project-wrapper">
                <Project />
              </div>
              <div styleName="news-wrapper">
                <News />
              </div>
            </div>
            <IP />
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
