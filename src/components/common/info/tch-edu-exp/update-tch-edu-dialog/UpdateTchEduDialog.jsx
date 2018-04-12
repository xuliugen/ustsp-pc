import React from 'react'

import TchEduDialog from '../tch-edu-dialog/TchEduDialog'
import updateDecorator from './updateDecorator'

@updateDecorator
export default class UpdateTchEduDialog extends React.Component {
  render() {
    return (
      <TchEduDialog {...this.props} />
    )
  }
}
