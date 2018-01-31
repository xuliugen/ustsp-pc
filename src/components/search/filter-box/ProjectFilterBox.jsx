import React from 'react'
import FilterLine from './FilterLine'
import FilterTags from './FilterTags'
import './styles.css'

import { Subject, Oriented, Publisher } from './data'

export default class ProjectFilterBox extends React.Component {
  render() {
    return (
      <div styleName="filter-box">
        <FilterLine
          conditions={Subject}
          style={{ height: '100px' }} />
        <FilterLine conditions={Oriented} />
        <FilterLine conditions={Publisher} />
        <FilterTags />
      </div>
    )
  }
}
