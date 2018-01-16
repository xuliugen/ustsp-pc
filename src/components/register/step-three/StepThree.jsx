import React from 'react'
import { inject, observer } from 'mobx-react'

import Student from './student/Student'
import Teacher from './teacher/Teacher'
import Enterprise from './enterprise/Enterprise'

@inject('registerStore')
@observer
export default class StepThree extends React.Component {
  componentWillMount() {
    this.props.registerStore.changeStep(3)
  }

  render() {
    const { userType } = this.props.registerStore.initial
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
