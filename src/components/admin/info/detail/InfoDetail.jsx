import React from 'react'

import { StuEduExp, TeacherInfo } from 'components/common'

export default class InfoDetail extends React.Component {
  render() {
    return (
      <div>
        <TeacherInfo />
        <StuEduExp editable />
      </div>
    )
  }
}
