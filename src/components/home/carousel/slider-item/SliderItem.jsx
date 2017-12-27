// @flow
import React from 'react'
import './sliderItem.css'

type Props = {
  item: Object,
  count: number
}
export default class SliderItem extends React.Component<Props> {
  render() {
    const { item, count } = this.props
    const width = `${100 / count}%`
    return (
      <li styleName="list-item" style={{ width: width }}>
        <img src={item.src} />
      </li>
    )
  }
}
