// @flow
import React from 'react'
import './cardHeader.css'
// import ImgAnotherBatch from './reload.png'

type Props = {
  title: string
}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div styleName="card-header">
        <span>{this.props.title}</span>
        {/* <span styleName="another-batch"><img src={ImgAnotherBatch} />&nbsp;&nbsp;换一批</span> */}
      </div>
    )
  }
}
