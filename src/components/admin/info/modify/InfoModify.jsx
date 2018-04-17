import React from 'react'

import { StuEduExp, TchEduExp, TchResearchExp, TchIpExp, TchAwardExp } from 'components/common/info'

export default class InfoModify extends React.Component {
  render() {
    return (
      <div>
        <StuEduExp editable />
        <TchEduExp editable />
        <TchResearchExp editable />
        <TchIpExp editable />,
        <TchAwardExp editable isResearch />
        <TchAwardExp editable />
      </div>
    )
  }
}
