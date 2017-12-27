// @flow
import React from 'react'
import './sliderDots.css'

type Props = {
  count: number,
  curIdx: number,
  turn: Function
}

export default class SliderItem extends React.Component<Props> {
  handleDotClick = (i: number) => {
    let option = i - this.props.curIdx
    this.props.turn(option)
  }

  render() {
    const { count, curIdx } = this.props
    const dots = []
    for (let i = 0; i < count; i++) {
      dots.push((
        <span styleName={'dot ' + (curIdx === i ? 'dot-active' : '')} key={i} onClick={this.handleDotClick.bind(null, i)} />
      ))
    }
    return (
      <div styleName="dot-container">
        {dots}
      </div>
    )
  }
}
