import React from 'react'
import { Form } from 'antd'

import StuEduDialog from '../stu-edu-dialog/StuEduDialog'
import createDecorator from './createDecorator'

@createDecorator
@Form.create()
export default class CreateStuEduDialog extends React.Component {
  render() {
    return (
      <StuEduDialog {...this.props} />
    )
  }
}
