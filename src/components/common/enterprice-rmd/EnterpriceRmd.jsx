import React from 'react'
import Header from 'components/detail/common/header/Header'
import EnterpriceItem from './enterprice-item/EnterpriceItem'
import './enterpriceRmd.css'
import { EtpInfoApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

@withRouter
export default class EnterpriceRmd extends React.Component {
  constructor() {
    super()
    this.state = {
      userid: this.props.match.params.id,
      enterprice: []
    }
  }
  async componentDidMount() {
    try {
      console.log(this.state.userid)
      const { Etpdata } = await EtpInfoApi.getEnterpriseInfo(4)
      console.log('hello')
      console.log(Etpdata)
    } catch (e) {

    }
  }
  render() {
    const enterpriceItem = this.state.enterprice.map((item, idx) => {
      return <EnterpriceItem enterprice={item} key={idx} />
    })
    return (
      <div styleName="enterprice_Rmd">
        <Header title="类似公司推荐" />
        { enterpriceItem }
      </div>
    )
  }
}
