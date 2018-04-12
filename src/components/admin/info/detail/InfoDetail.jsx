import React from 'react'

import { StuEduExp, TchEduExp } from 'components/common'

export default class InfoDetail extends React.Component {
  render() {
    return (
      <div>
        <StuEduExp editable />
        <TchEduExp editable />
      </div>
    )
  }
}
