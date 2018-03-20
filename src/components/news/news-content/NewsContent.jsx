import React from 'react'
import './newsContent.css'

export default class NewsContent extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.dynamics }}
        styleName="content"
      />
    )
  }
}
