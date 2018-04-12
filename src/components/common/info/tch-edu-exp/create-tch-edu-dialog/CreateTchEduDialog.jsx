import React from 'react'

import TchEduDialog from '../tch-edu-dialog/TchEduDialog'
import createDecorator from './createDecorator'

@createDecorator
export default class CreateTchEduDialog extends React.Component {
  render() {
    return (
      <TchEduDialog {...this.props} />
    )
  }
}
