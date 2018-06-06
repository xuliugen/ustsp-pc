// @flow
import React from 'react'
import { withRouter } from 'react-router-dom'
import './talentItem.css'

@withRouter
export default class TalentItem extends React.Component {
  handleClick = (url) => {
    this.props.history.push({
      pathname: url
    })
  }

  render() {
    const { talent } = this.props
    let url = ''
    switch (parseInt(talent.type)) {
      case 1:
        url = `/student/${talent.id}`
        break
      case 2:
        url = `/teacher/${talent.id}`
        break
    }
    return (
      <div styleName="talent-item">
        <a onClick={this.handleClick.bind(this, url)}>
          <img styleName="avatar" src={talent.photo} />
          <span styleName="name">{talent.name}</span>
        </a>
        <span styleName="university-item">{talent.school} / {talent.title}</span>
      </div>
    )
  }
}
