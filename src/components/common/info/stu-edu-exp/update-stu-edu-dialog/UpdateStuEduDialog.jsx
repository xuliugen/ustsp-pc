import React from 'react'
import { Form } from 'antd'

import StuEduDialog from '../stu-edu-dialog/StuEduDialog'
import updateDecorator from './updateDecorator'

@updateDecorator
@Form.create()
export default class UpdateStuEduDialog extends React.Component {
  render() {
    return (
      <StuEduDialog {...this.props} />
    )
  }
}
