import React from 'react'

import { StuEduExp } from 'components/common'

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
