import React from 'react'
import { NewsApi } from 'src/ajax'
import { NewsContent, HeaderWrapper } from 'components/news'

export default class News extends React.Component {
  state = {
    dynamicsId: this.props.match.params.id,
    title: '',
    abstract: '',
    dynamics: '',
    date: ''
  }

  componentWillMount() {
    this.getNewsDetail(this.state.dynamicsId)
  }

  componentWillReceiveProps(nextProps) {
    this.getNewsDetail(nextProps.match.params.id)
  }

  async getNewsDetail(dynamicsId) {
    try {
      const { data } = await NewsApi.fetchNewsDetail(dynamicsId)
      this.setState({
        title: data.title,
        abstract: data.abstract,
        dynamics: data.dynamics,
        date: data.date
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <HeaderWrapper title={this.state.title} />
        <NewsContent dynamics={this.state.dynamics} />
      </div>
    )
  }
}
