import React from 'react'
import { FormTitle } from '../../common'
import './tchEducationalExperience.css'
import ExpItem from './exp-item/ExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} />
        <div styleName="content">
          <ExpItem />
        </div>
      </div>
    )
  }
}
