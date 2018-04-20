import React from 'react'
import './styles.css'
import { Type } from './data'

import FilterLine from './FilterLine'
import FilterTags from './FilterTags'

export default class NewsFilterBox extends React.Component {
  render() {
    return (
      <div styleName="filter-box">
        <FilterLine conditions={Type} />
        <FilterTags />
      </div>
    )
  }
}
