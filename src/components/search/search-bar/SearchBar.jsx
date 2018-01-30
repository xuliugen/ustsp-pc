import React from 'react'
import { Input } from 'antd'
import { inject, observer } from 'mobx-react'

import './searchBar.css'

const Search = Input.Search

const types = [{
  type: 'talent',
  text: '人才搜索'
}, {
  type: 'project',
  text: '项目对接'
}, {
  type: 'achievement',
  text: '成果转化'
}, {
  type: 'info',
  text: '信息搜索'
}]

@inject('searchStore')
@observer
export default class SearchBar extends React.Component {
  handleSearchTypeClick(type) {
    this.props.searchStore.setType(type)
  }

  handleSearchIptChange = (e) => {
    this.props.searchStore.setContent(e.target.value)
  }

  handleSearch = (val) => {
    if (val) {
      this.props.searchStore.dispatchSearch()
    }
  }

  render() {
    return (
      <div styleName="searchBar-wrapper">
        <div styleName="searchBar-inner">
          <div styleName="search-box">
            <div styleName="search-box-inner">
              <ul styleName="search-type-box">
                {types.map(({type, text}) => {
                  let styleName = 'search-type-item'
                  if (type === this.props.searchStore.type) {
                    styleName += ' search-type-item-active'
                  }
                  return <li key={type} styleName={styleName} onClick={this.handleSearchTypeClick.bind(this, type)}>{text}</li>
                })}
              </ul>
              <Search
                styleName="search"
                enterButton="搜索"
                size="large"
                onChange={this.handleSearchIptChange}
                onSearch={this.handleSearch} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
