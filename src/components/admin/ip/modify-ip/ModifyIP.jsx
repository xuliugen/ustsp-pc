import React from 'react'
import './modifyIP.css'
import IPForm from '../common/ip-form/IPForm'
import { Form, Button, message } from 'antd'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

// import DemandForm from '../common/demand-form/DemandForm'

@inject('userStore')
@observer
@Form.create()
export default class ModifyIP extends React.Component {
  state = {
    ip: {}
  }

  componentDidMount() {
    this.getDemandDetail()
  }

  async getDemandDetail() {
    const { data } = await IpApi.fetchPatentDetail(this.props.match.params.id)
    // console.log(data)
    this.setState({
      ip: data.patentDTO
    })
  }

  handleModify = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('请完善需求信息')
      } else {
        values.applicationDate = values.applicationDate && values.applicationDate.valueOf()
        values.publicationDate = values.publicationDate && values.publicationDate.valueOf()
        values.ownerId = this.props.userStore.user.id
        values.id = this.state.ip.id
        values.createTime = this.state.ip.createTime
        values.updateTime = this.state.ip.updateTime
        values.status = -1
        try {
          await IpApi.updateIP(values)
          message.success('修改成功')
          this.props.history.push('/admin/ip/transfer-ip')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title-wrapper">
          <span styleName="title">修改</span>
        </div>
        <IPForm form={this.props.form} ip={this.state.ip} />
        <div styleName="modBtn-container">
          <Button size="large" type="primary" onClick={this.handleModify}>修改</Button>
        </div>
      </div>
    )
  }
}
