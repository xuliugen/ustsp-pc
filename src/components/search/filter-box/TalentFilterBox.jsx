import React from 'react'
import { observer } from 'mobx-react'
import FilterLine from './FilterLine'
import FilterTags from './FilterTags'
import './styles.css'

import { Major, Province, School, Title, Type } from './data'

@observer
export default class TalentFilterBox extends React.Component {
  state = {
    ProvinceSchool: []
  }

  constructor() {
    super()
    this.onProvinceChange = this.onProvinceChange.bind(this)
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
    const ProvinceSchool = {
      category: '大学',
      field: 'school',
      items: [{
        label: '不限',
        value: ''
      }].concat(this.state.ProvinceSchool)
    }
    return (
      <div styleName="filter-box">
        <FilterLine
          conditions={Major}
          style={{height: '100px'}} />
        <FilterLine
          conditions={Province}
          addDisabled
          callback={this.onProvinceChange}
          hasMore />
        {this.state.ProvinceSchool.length > 0 &&
          <FilterLine conditions={ProvinceSchool} hasMore />}
        <FilterLine conditions={Title} />
        <FilterLine conditions={Type} />
        <FilterTags />
      </div>
    )
  }
}
