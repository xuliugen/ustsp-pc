import React from 'react'
import { PushApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
export default class RecordDetail extends React.Component {
  componentDidMount() {
    this.getDetail()
  }

  async getDetail() {
    await PushApi.fetchRecordDetail(this.props.match.params.id, this.props.userStore.user.id)
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}
