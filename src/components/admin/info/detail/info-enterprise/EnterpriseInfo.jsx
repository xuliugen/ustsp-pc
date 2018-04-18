import React from 'react'
import EnterPriseBasicInfo from './enterprise-basic-info/EnterpriseBasicInfo'
import EnterPriseOtherInfo from './enterprise-other-info/EnterpriseOtherInfo'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'
import { EtpInfoApi } from 'src/ajax'
import './enterpriseInfo.css'

@inject('userStore')
@observer
export default class EnterpriseInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      etpBasicInfo: {},
      etpOtherInfo: {}
    }
  }

  componentDidMount = async () => {
    const etpId = this.props.userStore.user.id
    console.log(this.props.userStore)
    try {
      const { data } = await EtpInfoApi.getEnterpriseInfo(etpId)
      this.setState({
        etpBasicInfo: {
          name: data.realName,
          avatar: data.avatar,
          industry: data.industry,
          birth: data.birth,
          scale: data.scale,
          nature: data.nature,
          businessLicence: data.businessLicence,
          place: data.place,
          stage: data.stage,
          photo: data.photo,
          businessPhoto: data.businessPhoto
        },
        etpOtherInfo: {
          indexPage: data.indexPage,
          wechat: data.webchat,
          introduction: data.introduction
        }
      })
      console.log(this.state.etpBasicInfo)
    } catch (e) {
      message.error('企业信息获取失败')
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="content-wrapper">
        <EnterPriseBasicInfo etpBasicInfo={this.state.etpBasicInfo} />
        <EnterPriseOtherInfo etpOtherInfo={this.state.etpOtherInfo} />
      </div>
    )
  }
}
