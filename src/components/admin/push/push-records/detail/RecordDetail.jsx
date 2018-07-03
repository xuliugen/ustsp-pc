import React from 'react'
import { PushApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'
import './recordDetail.css'

@inject('userStore')
@observer
export default class RecordDetail extends React.Component {
  state = {
    title: '',
    content: ''
  }
  componentDidMount() {
    this.getDetail()
  }

  async getDetail() {
    const { data } = await PushApi.fetchRecordDetail(this.props.match.params.id, this.props.userStore.user.id)
    this.setState({
      title: data.notification.title,
      content: data.notification.content
    })
  }

  render() {
    const { title, content } = this.state
    return (
      <div styleName="root">
        <div styleName="header">
          <div styleName="title">{title}</div>
        </div>
        <div styleName="content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    )
  }
}
