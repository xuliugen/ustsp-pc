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
    switch (user.userType) {
      case 1 : InfoModule = StuInfo
        break
      case 2: InfoModule = TeacherInfo
        break
      case 3: InfoModule = EnterpriseInfo
    }
    return (
      <div style={{ width: '900px' }}>
        <InfoModule uid={this.props.userStore.user.id} />
      </div>
    )
  }
}
