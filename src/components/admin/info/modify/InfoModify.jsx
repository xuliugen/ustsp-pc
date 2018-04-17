import React from 'react'

import { StuEduExp, TchEduExp, TchResearchExp, TchIpExp } from 'components/common/info'

export default class InfoModify extends React.Component {
  render() {
    return (
      <div>
        <StuEduExp editable />
        <TchEduExp editable />
        <TchResearchExp editable />
        <TchIpExp editable />
      </div>
    )
  }
}
