import React from 'react'
import { inject, observer } from 'mobx-react'
import StuInfo from './info-student/StuInfo'
import TeacherInfo from './info-teacher/TeacherInfo'
import EnterpriseInfo from './info-enterprise/EnterpriseInfo'

@inject('userStore')
@observer
export default class InfoDetail extends React.Component {
  render() {
    const { user } = this.props.userStore
    let InfoModule
    const props = {
      uid: this.props.userStore.user.id
    }
    switch (user.userType) {
      case 1:
        InfoModule = <StuInfo {...props} />
        break
      case 2:
        InfoModule = <TeacherInfo {...props} />
        break
      case 3:
        InfoModule = <EnterpriseInfo {...props} />
        break
      case 4:
        InfoModule = null
        break
      default:
        InfoModule = null
        break
    }
    return (
      <div style={{ width: '900px' }}>
        {InfoModule}
      </div>
    )
  }
}
