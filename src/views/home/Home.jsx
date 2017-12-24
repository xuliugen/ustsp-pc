// @flow
import React from 'react'
import { Header } from 'components/common'
import { Carousel, Search, Talent, Project, News, IP, Footer } from 'components/home'

export default class Home extends React.Component<Object> {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Carousel />
          <Search />
          <Talent />
          <Project />
          <News />
          <IP />
          <Footer />
        </div>
      </div>
    )
  }
}
