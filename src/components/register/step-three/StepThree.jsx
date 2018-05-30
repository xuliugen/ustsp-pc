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
      case 1:
        content = <Student />
        break
      case 2:
        content = <Teacher />
        break
      case 3:
        content = <Enterprise />
        break
    }
    return content
  }
}
