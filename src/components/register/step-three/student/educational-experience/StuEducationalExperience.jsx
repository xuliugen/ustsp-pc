import React from 'react'
import { FormTitle } from '../../common'
import './stuEducationalExperience.css'
import ExpItem from './exp-item/ExpItem'
import NewExpItem from './new-exp-item/NewExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} />
        <div styleName="content">
          <NewExpItem />
          <ExpItem />
        </div>
      </div>
    )
  }
}
