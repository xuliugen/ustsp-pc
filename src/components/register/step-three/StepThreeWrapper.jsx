import React from 'react'
import Teacher from './Teacher'
import Enterprise from './Enterprise'
import { inject, observer } from 'mobx-react'

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
        // content = Student
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
