// @flow
import React from 'react'
import './carousel.css'
import imgBanner from './banner.png'
import SliderItem from './slider-item/SliderItem'
import SliderDots from './slider-dots/SliderDots'

type State = {
  curIdx: number,
  imgData: Array<{}>,
  delay: number,
  autoplay: boolean,
  pause: boolean
}

export default class Carousel extends React.Component<{}, State> {
  autoPlayFlag: number
  constructor() {
    super()
    this.state = {
      curIdx: 0,
      imgData: [{
        src: imgBanner
      }, {
        src: imgBanner
      }, {
        src: imgBanner
      }],
      delay: 5,
      autoplay: true,
      pause: true
    }
  }
  // 跳转到第n张图
  turn(n: number) {
    let _n = this.state.curIdx + n
    if (_n < 0) {
      _n = _n + this.state.imgData.length
    }
    if (_n >= this.state.imgData.length) {
      _n = _n - this.state.imgData.length
    }
    this.setState({ curIdx: _n })
  }
  // 开始自动轮播
  goPlay = () => {
    if (this.state.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1)
      }, this.state.delay * 1000)
    }
  }
  // 暂停自动轮播
  pausePlay = () => {
    clearInterval(this.autoPlayFlag)
  }

  componentDidMount() {
    this.goPlay()
  }

  render() {
    const count = this.state.imgData.length
    const listItems = this.state.imgData.map((item, idx) => {
      return <SliderItem item={item} count={count} key={idx} />
    })
    return (
      <div
        styleName="carousel"
        onMouseOver={this.state.pause ? this.pausePlay : null}
        onMouseOut={this.state.pause ? this.goPlay : null}
      >
        <ul
          styleName="list"
          style={{
            width: `${100 * count}%`,
            left: -100 * this.state.curIdx + '%',
            transitionDuration: '1s'
          }}>
          {listItems}
        </ul>
        <SliderDots count={count} curIdx={this.state.curIdx} turn={this.turn.bind(this)} />
      </div>
    )
  }
}
