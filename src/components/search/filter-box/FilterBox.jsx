import React from 'react'
import { observer, inject } from 'mobx-react'
import { Tag } from 'antd'
import FilterLine from './FilterLine'
import './styles.css'

import { Major, Province, School, Title, Type } from './data'

@inject('searchStore')
@observer
export default class FilterBox extends React.Component {
  state = {
    ProvinceSchool: []
  }

  constructor() {
    super()
    this.onProvinceChange = this.onProvinceChange.bind(this)
  }

  handleTagClose = (condition) => {
    this.props.searchStore.removeCondition(condition)
  }

  onProvinceChange({ label }) {
    const provinceSchoolArr = School[label]
    if (provinceSchoolArr) {
      const ProvinceSchool = provinceSchoolArr.map(school => ({label: school, value: school}))
      this.setState({ProvinceSchool})
    } else {
      this.setState({ProvinceSchool: []})
    }
  }

  render() {
    const searchStore = this.props.searchStore
    const ProvinceSchool = {
      category: '大学',
      field: 'school',
      items: this.state.ProvinceSchool
    }
    return (
      <div styleName="filter-box">
        <FilterLine conditions={Major} />
        <FilterLine conditions={Province} addDisabled callback={this.onProvinceChange} />
        {this.state.ProvinceSchool.length > 0 &&
          <FilterLine conditions={ProvinceSchool} />}
        <FilterLine conditions={Title} />
        <FilterLine conditions={Type} />
        <div styleName="conditions">
          {searchStore.conditions.map(({ category, field, value }) => {
            return <Tag key={value} closable afterClose={this.handleTagClose.bind(this, {field, value})}>{category}: {value}</Tag>
          })}
        </div>
      </div>
    )
  }
}
