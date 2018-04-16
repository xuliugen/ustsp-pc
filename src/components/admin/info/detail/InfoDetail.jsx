import React from 'react'
import { inject } from 'mobx-react'
import { StuEduExp } from 'components/common'
import TeacherInfo from './info-teacher/TeacherInfo'
import EnterpriseInfo from './info-enterprise/EnterpriseInfo'

@inject('userStore')
export default class InfoDetail extends React.Component {
  render() {
    const { user } = this.props.userStore
    let { InfoModule } = {}
    switch (user.userType) {
      case 1 : InfoModule = TeacherInfo
        break
      case 2 : InfoModule = StuEduExp
        break
      case 3 : InfoModule = EnterpriseInfo
    }
    return (
      <div>
        <InfoModule />
        <StuEduExp editable />
      </div>
    )
  }
}
