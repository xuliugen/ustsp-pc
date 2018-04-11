import React from 'react'
import { StuInfoApi } from 'src/ajax'
import { message } from 'antd'

const createDecorator = WrappedComponent => {
  return class extends React.Component {
    async dispatchCreate(expItem) {
      try {
        await StuInfoApi.completeStuEducation(expItem)
        message.success('教育经历添加成功')
        this.setState({ loading: false })
        this.props.confirmAdd(expItem)
      } catch (e) {
        this.setState({ loading: false })
        console.log(e)
        this.setState({ loading: false })
      }
    }
    render() {
      return (
        <WrappedComponent dispatchOperate={this.dispatchCreate} {...this.props} />
      )
    }
  }
}

export default createDecorator
