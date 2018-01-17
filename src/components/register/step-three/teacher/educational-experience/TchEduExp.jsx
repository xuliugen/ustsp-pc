import React from 'react'
import { FormTitle } from '../../common'
import './tchEduExp.css'
import ExpItem from './exp-item/ExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} hasAddBtn handleAddClick={() => { alert('on click') }} />
        <div styleName="content">
          <ExpItem />
        </div>
      </div>
    )
  }
}
