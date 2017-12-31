// @flow
import React from 'react'
import './projectItem.css'
import imgSee from './see.png'

type Props = {
  title: string,
  school: string,
  startTime: string,
  endTime: string,
  visitNum: number,
  price: number,
  bgColor: string
}

export default class ProjectItem extends React.Component<Props> {
  render() {
    return (
      <div styleName="project-item">
        <div styleName="item">
          <div styleName="head">
            <div styleName="title">{this.props.title}</div>
            <div styleName="school" style={{backgroundColor: this.props.bgColor}} >{this.props.school}</div>
          </div>
          <div styleName="time">
            <span>发布于 {this.props.startTime}</span>
            <span>截止于 {this.props.endTime}</span>
            <span><img src={imgSee} /> {this.props.visitNum}</span>
          </div>
        </div>
        <div styleName="price">¥<span>{this.props.price}</span></div>
      </div>
    )
  }
}
