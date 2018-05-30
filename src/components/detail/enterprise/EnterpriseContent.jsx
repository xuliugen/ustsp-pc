import React from 'react'
import './enterpriseContent.css'
import InfoEnterprise from './info-enterprise/InfoEnterprise'
import ProjectItem from 'components/common/project-item/ProjectItem'
import NewsItem from 'components/common/news-item/NewsItem'
import { EtpInfoApi, DemandApi, NewsApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

@withRouter
export default class EnterpriseContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infoPanel: '公司简介',
      company: {},
      intro: '',
      projects: { flag: 0, projects: [] }, // flag：是否发过请求, 0：第一次请求
      news: { flag: 0, news: [] } // 同上
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    try {
      const info = await EtpInfoApi.getEnterpriseInfo(this.props.match.params.id)
      this.setState({
        company: info.data,
        intro: info.data.introduction
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getProjects() {
    try {
      const { data } = await DemandApi.getPublishedDemand(this.props.match.params.id, 1, 10)
      this.setState({
        projects: { flag: 1, projects: data.data }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getNews() {
    try {
      const { data } = await NewsApi.getOwnNews(this.props.match.params.id, 1, 10)
      this.setState({
        news: { flag: 1, news: data.data }
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleClick(item) {
    if (item !== this.state.infoPanel) {
      this.setState({
        infoPanel: item
      })
      switch (item) {
        case '发布的项目':
          if (this.state.projects.flag === 0) {
            this.getProjects()
          }
          break
        case '动态':
          if (this.state.news.flag === 0) {
            this.getNews()
          }
          break
        default:
          break
      }
    }
  }

  renderContent(status) {
    switch (status) {
      case '公司简介':
        return this.state.intro
      case '发布的项目':
        return this.state.projects.projects.length === 0 ? (
          <div style={{ fontSize: '18px' }}>他暂时还没有发布项目</div>
        ) : this.state.projects.projects.map((item, idx) => {
          return (
            <ProjectItem project={item.projectResearchInfo} key={idx} detail />
          )
        })
      case '动态':
        return this.state.news.news.length === 0 ? (
          <div style={{ fontSize: '18px' }}>他暂时还没有发布动态</div>
        ) : this.state.news.news.map((item, idx) => {
          return (
            <div style={{ padding: '20px 0', borderBottom: '1px solid #ddd' }}>
              <NewsItem news={item} key={idx} />
            </div>
          )
        })
      default:
        break
    }
  }

  render() {
    const tags = ['公司简介', '发布的项目', '动态']
    let Content = this.renderContent(this.state.infoPanel)
    return (
      <div>
        <InfoEnterprise company={this.state.company} />
        <div styleName="tags">
          {tags.map((item, idx) => {
            let styleName = 'info-tag' + (this.state.infoPanel === item ? ' active' : '')
            return (
              <span key={idx} styleName={styleName} onClick={this.handleClick.bind(this, item)}>{item}</span>
            )
          })}
        </div>
        <div styleName="content">
          {Content}
        </div>
      </div>
    )
  }
}
