import React from 'react'
import Header from 'components/detail/common/header/Header'
import EnterpriceItem from './enterprice-item/EnterpriceItem'
import './enterpriceRmd.css'
export default class EnterpriceRmd extends React.Component {
  constructor() {
    super()
    this.state = {
      enterprice: []
    }
  }
  async componentDidMount() {

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
