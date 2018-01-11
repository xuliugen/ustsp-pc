import React from 'react'
import { inject, observer } from 'mobx-react'

import Student from './student/Student'
import Teacher from './Teacher'
import Enterprise from './Enterprise'

@inject('registerStore')
@observer
export default class StepThree extends React.Component {
  componentWillMount() {
    this.props.registerStore.changeStep(3)
  }

  render() {
    const { userType } = this.props.registerStore.one
    let content = null
    switch (userType) {
      case 'student':
        content = <Student />
        break
      case 'teacher':
        content = <Teacher />
        break
      case 'enterprise':
        content = <Enterprise />
        break
    }
    return content
  }
}
