// @flow
import React from 'react'
import { observer } from 'mobx-react'
import './progress.css'

type Props = {
  step: number
}

@observer
export default class Progress extends React.Component<Props> {
  render() {
    const { step } = this.props
    return (
      <div styleName="prgress">
        <span styleName={'step-box' + (step >= 1 ? ' step-box-finished' : '')}>填写基本信息</span>
        <span styleName={'step-box' + (step >= 2 ? ' step-box-finished' : '')}>认领信息（若有）</span>
        <span styleName={'step-box' + (step >= 3 ? ' step-box-finished' : '')}>完善详细信息</span>
      </div>
    )
  }
}
