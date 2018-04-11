import React from 'react'
import StuEduDialog from '../stu-edu-dialog/StuEduDialog'
import createDecorator from './createDecorator'

@createDecorator
export default class NewStuEduDialog extends React.Component {
  render() {
    return (
      <StuEduDialog {...this.props} />
    )
  }
}
