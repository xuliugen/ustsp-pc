import React from 'react'
import { TchInfoApi } from 'src/ajax'
import { message, Form } from 'antd'
import { observer, inject } from 'mobx-react'

import Dialog from '../../dialog/Dialog'

@Form.create()
@inject('registerStore', 'userStore')
@observer
export default class CreateDialog extends React.Component {
  async dispatchCreate() {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const item = {
            type: Number(values.type),
            country: values.country,
            name: values.name,
            status: Number(values.status),
            registrationNumber: values.registrationNumber,
            applyDate: values.applyDate ? values.applyDate.valueOf() : null,
            applyUnit: values.applyUnit,
            inventor: values.inventor,
            rank: Number(values.rank)
          }
          if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
            item.userId = this.props.registerStore.initial.uid
          } else if (this.props.userStore.user && this.props.userStore.user.id) {
            item.userId = this.props.userStore.user.id
          }
          const { data } = await TchInfoApi.completeIntellectualProperty(item)

          message.success(`${this.props.title}添加成功`)
          item.id = data

          this.props.createItem(item)
          this.props.setVisible(false)
        } catch (e) {
          message.error('添加失败')
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }
  render() {
    const newProps = {
      onDialogConfirm: this.dispatchCreate.bind(this),
      onDialogCancel: this.props.setVisible.bind(this, false)
    }
    return (
      <Dialog {...newProps} {...this.props} />
    )
  }
}
