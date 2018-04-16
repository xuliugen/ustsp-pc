import React from 'react'
import { StuInfoApi } from 'src/ajax'
import { message, Form } from 'antd'
import { observer, inject } from 'mobx-react'

import Dialog from '../../dialog/Dialog'

@Form.create()
@inject('registerStore', 'userStore')
@observer
export default class CreateDialog extends React.Component {
  async dispatchCreate(expItem) {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const expItem = {
            id: this.props.exp && this.props.exp.id,
            school: values.school ? values.school[1] : null,
            college: values.college,
            major: values.major ? values.major[1] : null,
            level: values.level,
            startTime: values.date ? values.date.valueOf() : null,
            endTime: values.finishTime ? values.finishTime.valueOf() : null
          }
          if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
            expItem.userId = this.props.registerStore.initial.uid
          } else if (this.props.userStore.user && this.props.userStore.user.id) {
            expItem.userId = this.props.userStore.user.id
          }
          const { data } = await StuInfoApi.completeStuEducation(expItem)
          message.success('教育经历添加成功')
          expItem.id = data

          this.props.createItem(expItem)
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
