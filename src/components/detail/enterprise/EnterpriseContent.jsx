import React from 'react'
import './enterpriseContent.css'
import InfoEnterprise from './info-enterprise/InfoEnterprise'
import { DetailOptions } from '../common'
import { EtpInfoApi } from 'src/ajax'

export default class EnterpriseContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {},
      intro: ''
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    try {
      const info = await EtpInfoApi.getEnterpriseInfo(this.props.match.params.id)
      this.setState({
        company: info.data,
        intro: info.data.introduction
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <InfoEnterprise company={this.state.company} />
        <DetailOptions type="enterprise" intro={this.state.intro} />
      </div>
    )
  }
}
