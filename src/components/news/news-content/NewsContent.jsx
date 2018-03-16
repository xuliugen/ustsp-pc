import React from 'react'

export default class NewsContent extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.dynamics }} />
    )
  }
}
