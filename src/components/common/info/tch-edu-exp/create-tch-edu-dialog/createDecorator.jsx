import React from 'react'
import { TchInfoApi } from 'src/ajax'
import { message } from 'antd'
import { observer, inject } from 'mobx-react'

const createDecorator = WrappedComponent => {
  @inject('registerStore', 'userStore')
  @observer
  class _class extends React.Component {
    constructor(props) {
      super(props)
      this.dispatchCreate = this.dispatchCreate.bind(this)
    }

    async dispatchCreate(expItem) {
      try {
        if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
          expItem.userId = this.props.registerStore.initial.uid
        } else if (this.props.userStore.user && this.props.userStore.user.id) {
          expItem.userId = this.props.userStore.user.id
        }
        const { data } = await TchInfoApi.completeEducation(expItem)
        message.success('教育经历添加成功')
        // this.setState({ loading: false })
        expItem.id = data
        this.props.confirmAdd(expItem)
      } catch (e) {
        message.error('添加失败')
        console.log(e)
        // this.setState({ loading: false })
      }
    }

    render() {
      return (
        <WrappedComponent dispatchOperate={this.dispatchCreate} {...this.props} />
      )
    }
  }

  return _class
}

export default createDecorator
