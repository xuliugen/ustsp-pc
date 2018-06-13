import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import ProjectItem from 'components/common/project-item/ProjectItem'
import NewsItem from 'components/common/news-item/NewsItem'
import './detailOptions.css'
import { DemandApi, NewsApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

@withRouter
export default class DetailOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infoPanel: '简介',
      projects: [],
      projectType: '',
      news: []
    }
    this.renderContent = this.renderContent.bind(this)
  }

  handleChangeOption(item, projectType) {
    if (item !== this.state.infoPanel) {
      this.setState({
        infoPanel: item
      })
      switch (item) {
        case '项目':
          this.setProjectType(projectType)
          break
        case '动态':
          this.getNews()
          break
        default: break
      }
    } else {
      if (typeof projectType === 'string' && projectType !== this.state.projectType) {
        this.setProjectType(projectType)
      }
    }
  }

  async getProjects(type) {
    try {
      const { data } = type === 'published' ? await DemandApi.getPublishedDemand(this.props.match.params.id, 1, 10) : await DemandApi.getUndertakenDemand(this.props.match.params.id, 1, 10)
      this.setState({
        projects: data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  setProjectType(type) {
    this.setState({
      projectType: type
    })
    this.getProjects(type)
  }

  async getNews() {
    try {
      const { data } = await NewsApi.getOwnNews(this.props.match.params.id, 1, 10)
      this.setState({
        news: data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  renderContent(status) {
    switch (status) {
      case '简介':
        return this.props.intro
      case '项目':
        // 去掉待审核项目
        const projects = this.state.projects.filter(item => item.projectResearchInfo ? item.projectResearchInfo.status !== 0 : item.status !== 0)
        return projects.length === 0 ? (
          <div style={{ fontSize: '18px' }}>他暂时还没有{this.state.projectType === 'published' ? '发布' : '承接'}项目</div>
        ) : projects.map((item, idx) => {
          return (
            <div style={{ padding: '20px 0', borderBottom: '1px solid #ddd' }} key={item.id || item.projectResearchInfo.id}>
              <ProjectItem project={item.projectResearchInfo || item} detail />
            </div>
          )
        })
      case '动态':
        return this.state.news.length === 0 ? (
          <div style={{ fontSize: '18px' }}>他暂时还没有发布动态</div>
        ) : this.state.news.map((item, idx) => {
          return (
            <div style={{ padding: '20px 0', borderBottom: '1px solid #ddd' }} key={item.id}>
              <NewsItem news={item} />
            </div>
          )
        })
      default:
        break
    }
  }

  render() {
    const tags = ['简介', '项目', '动态']
    const menu = (
      <Menu>
        <Menu.Item>
          <a styleName="menu-tag" onClick={this.handleChangeOption.bind(this, '项目', 'published')}>发布的项目</a>
        </Menu.Item>
        <Menu.Item>
          <a styleName="menu-tag" onClick={this.handleChangeOption.bind(this, '项目', 'undertaken')}>承接的项目</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div>
        <div styleName="tags">
          {tags.map((item, idx) => {
            let styleName = 'info-tag' + (this.state.infoPanel === item ? ' active' : '')
            if (item === '项目') {
              switch (this.props.type) {
                case 'enterprise':
                  return <span key={idx} styleName={styleName} onClick={this.handleChangeOption.bind(this, item, 'published')}>发布的项目</span>
                case 'student': case 'teacher':
                  return (
                    <Dropdown overlay={menu} key={idx} >
                      <span styleName={styleName}>项目<Icon type="down" /></span>
                    </Dropdown>
                  )
                default:
                  return ''
              }
            } else {
              return (
                <span key={idx} styleName={styleName} onClick={this.handleChangeOption.bind(this, item)}>{item}</span>
              )
            }
          })}
        </div>
        <div styleName="content">
          {this.renderContent(this.state.infoPanel)}
        </div>
      </div>
    )
  }
}
