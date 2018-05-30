import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { message, Form } from 'antd'
import { observer, inject } from 'mobx-react'

import Dialog from '../../dialog/Dialog'

@Form.create()
@inject('registerStore', 'userStore')
@observer
export default class UpdateDialog extends React.Component {
  async dispatchUpdate(expItem) {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const expItem = {
            id: this.props.item && this.props.item.id,
            school: values.school ? values.school[1] : null,
            college: values.college,
            major: values.major ? values.major[1] : null,
            level: values.level,
            startTime: values.startTime ? values.startTime.valueOf() : null,
            endTime: values.endTime ? values.endTime.valueOf() : null
          }
          if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
            expItem.userId = this.props.registerStore.initial.uid
          } else if (this.props.userStore.user && this.props.userStore.user.id) {
            expItem.userId = this.props.userStore.user.id
          }
          await UserInfoApi.updateEdu(expItem)
          message.success('教育经历更新成功')

          this.props.updateItem(expItem)
          this.props.setVisible(false)
        } catch (e) {
          message.error('更新失败')
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  render() {
    const newProps = {
      onDialogConfirm: this.dispatchUpdate.bind(this),
      onDialogCancel: this.props.setVisible.bind(this, false),
      exp: this.props.item
    }
    return (
      <Dialog {...newProps} {...this.props} />
    )
  }
}
