import React from 'react'
import FilterLine from './FilterLine'
import FilterTags from './FilterTags'
import './styles.css'
import { IndustryCategory, PatentType, LegalStatus } from './data'

export default class PatentFilterBox extends React.Component {
  render() {
    return (
      <div styleName="filter-box">
        <FilterLine conditions={IndustryCategory} style={{ height: '100px' }} />
        <FilterLine conditions={PatentType} />
        <FilterLine conditions={LegalStatus} />
        <FilterTags />
      </div>
    )
  }
}
