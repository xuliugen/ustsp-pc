import React from 'react'
import Header from 'components/detail/common/header/Header'
import EnterpriceItem from './enterprice-item/EnterpriceItem'
import './enterpriceRmd.css'
import { EtpInfoApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
export default class EnterpriceRmd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enterprice: []
    }
  }

  async componentDidMount() {
    try {
      // const { userStore } = this.props
      // let param = ''
      // if (userStore.isLogin) {
      //   param = userStore.user.id
      // }
      const { data } = await EtpInfoApi.fetchRmdEtp()
      if (Array.isArray(data)) {
        this.setState({
          enterprice: data.slice(0, 4)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const enterpriceItem = this.state.enterprice.map((item, idx) => {
      return <EnterpriceItem enterprice={item} key={idx} />
    })
    return (
      <div styleName="enterprice-rmd">
        <Header title="类似公司推荐" />
        { enterpriceItem }
      </div>
    )
  }
}
