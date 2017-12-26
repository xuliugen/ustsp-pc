// @flow
import React from 'react'
import './searchInput.css'
import icoTriangle from './ico_triangle.png'
import icoSearch from './ico_search.png'

export default class SearchInput extends React.Component<{}> {
  render() {
    return (
      <form styleName="search-comp" onSubmit={e => e.preventDefault()}>
        <div styleName="select-box">
          <div styleName="select-current">人才<img src={icoTriangle} /></div>
          <div styleName="select-option-container">
            <div styleName="select-option">项目</div>
            <div styleName="select-option">专利</div>
            <div styleName="select-option">成果</div>
          </div>
        </div>
        <div styleName="search-input-container">
          <input styleName="search-input" placeholder="人才、项目、成果、专利" />
          <img styleName="search-ico" src={icoSearch} />
        </div>
      </form>
    )
  }
}
