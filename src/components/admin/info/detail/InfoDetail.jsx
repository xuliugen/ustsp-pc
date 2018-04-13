import React from 'react'
import { inject } from 'mobx-react'
import { StuEduExp, EnterpriseInfo, TeacherInfo } from 'components/common'

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
