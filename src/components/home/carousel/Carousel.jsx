// @flow
import React from 'react'
import './carousel.css'
import imgBanner from './banner.png'
// import imgBanner2 from 'src/assets/banner2.jpg'
import imgBanner3 from 'src/assets/banner4.jpg'
import imgBannerBirthday from 'src/assets/banner_birthday.jpg'
import SliderItem from './slider-item/SliderItem'
import SliderDots from './slider-dots/SliderDots'

export default class Carousel extends React.Component {
  autoPlayFlag = null
  constructor() {
    super()
    this.state = {
      curIdx: 0,
      imgData: [{
        src: imgBanner
      }, {
        src: imgBannerBirthday
      }, {
        src: imgBanner3
      }],
      delay: 5,
      autoplay: true,
      pause: true
    }
  }
  // 跳转到第n张图
  turn(n) {
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

  componentWillUnmount() {
    clearInterval(this.autoPlayFlag)
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
        onMouseOut={this.state.pause ? this.goPlay : null}>
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
