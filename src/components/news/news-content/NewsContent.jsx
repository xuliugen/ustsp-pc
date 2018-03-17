import React from 'react'

export default class NewsContent extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.dynamics }}
        style={{ width: '800px', margin: '0 auto', paddingTop: '40px' }}
      />
    )
  }
}
