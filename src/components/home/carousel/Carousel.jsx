// @flow
import React from 'react'
import './carousel.css'
import banner from './banner.png'

export default class Carousel extends React.Component<{}> {
  render() {
    return (
      <div styleName="carousel">
        <img styleName="img" src={banner} />
      </div>
    )
  }
}
