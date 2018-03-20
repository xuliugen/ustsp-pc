import React from 'react'
import { NewsApi, TalentApi } from 'src/ajax'
import { NewsContent, HeaderWrapper } from 'components/news'
import { Header, Footer } from 'components/common'
import './newsDetail.css'

export default class News extends React.Component {
  state = {
    dynamicsId: this.props.match.params.id,
    title: '',
    abstract: '',
    dynamics: '',
    date: '',
    userId: '',
    publisher: {}
  }

  componentDidMount() {
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
        date: data.date,
        userId: data.userId,
        view: data.view
      })
      const { data: pubData } = await TalentApi.fetchUserInfo(data.userId)
      this.setState({
        publisher: {
          ...pubData.userInfo,
          username: pubData.username
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="page">
        <Header />
        <HeaderWrapper {...this.state} />
        <NewsContent dynamics={this.state.dynamics} />
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
