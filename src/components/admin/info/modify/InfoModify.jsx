import React from 'react'
import './infoModify.css'
import { inject, observer } from 'mobx-react'

import ModifyTchInfo from './tch/ModifyTchInfo'
import ModifyStuInfo from './stu/ModifyStuInfo'

import ModifyEtpInfo from './etp/ModifyEtpInfo'

@inject('userStore')
@observer
export default class InfoModify extends React.Component {
  render() {
    const { userType, id } = this.props.userStore.user
    let Content = null
    switch (userType) {
      case 1:
        Content = ModifyStuInfo
        break
      case 2:
        Content = ModifyTchInfo
        break
      case 3:
        Content = ModifyEtpInfo
        break
      default:
        return null
    }
    return (<div styleName="root"><Content userId={id} /></div>)
  }
}
