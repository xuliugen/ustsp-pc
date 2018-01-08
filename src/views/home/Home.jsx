// @flow
import React from 'react'
import { Header } from 'components/common'
import { Carousel, Search, Talent, Project, News, IP, Footer } from 'components/home'
import './home.css'

export default class Home extends React.Component<Object> {
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
            <div styleName="row">
              <Project />
              <News />
            </div>
            <IP />
            <Footer />
          </main>
        </div>
      </div>
    )
  }
}
