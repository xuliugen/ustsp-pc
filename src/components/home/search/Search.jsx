// @flow
import React from 'react'
import './search.css'
import SearchTitle from './title/SearchTitle'
import SearchInput from './search-input/SearchInput'
import Statistics from './statistics/Statistics'

export default class Search extends React.Component<{}> {
  render() {
    return (
      <div styleName="search">
        <div styleName="title-wrapper">
          <SearchTitle />
        </div>
        <div styleName="search-comp-wrapper">
          <SearchInput />
        </div>
        <div styleName="statistics-wrapper">
          <Statistics />
        </div>
      </div>
    )
  }
}
