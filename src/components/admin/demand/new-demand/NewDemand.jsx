import React from 'react'
import './NewDemand.css'
import { Form, message, Button } from 'antd'
// import SkillsRequirement from './SkillsRequirement'
// import UploadFile from './upload-file/UploadFile'
import DemandForm from '../common/demand-form/DemandForm'
import { observer, inject } from 'mobx-react'
import { DemandApi } from 'src/ajax'

@inject('userStore')
@observer
@Form.create()
export default class NewDemand extends React.Component {
  submitForm = () => {
    // let projectSkillList = []
    // for (let i = 0; i < this.state.skills.length; i++) {
    //   projectSkillList.push({
    //     skill: this.state.skills[i]
    //   })
    // }
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        this.setState({
          visible: false
        })
        message.error('请完善需求信息')
      } else {
        const regData = {
          projectSkillList: values.skills && values.skills.map(i => ({skill: i})),
          projectResearchInfo: {
            projectName: values.projectName,
            type: values.type,
            subject: values.subject,
            major: null,
            startTime: values.timeInterval[0].valueOf(),
            endTime: values.timeInterval[1].valueOf(),
            deadline: values.deadLine.valueOf(),
            contactWay: values.contactWay,
            province: values.province,
            city: values.city,
            // uploadfileUrl: this.state.uploadFile ? this.state.uploadFile.fileUrl : null,
            // uploadfileName: this.state.uploadFile ? this.state.uploadFile.fileName : null,
            uploadfileUrl: values.uploadfileUrl,
            uploadfileName: '需求文件',
            money: Number(values.money),
            toOriented: values.oriented,
            projectIntroduction: values.projectIntroduction,
            ownerId: this.props.userStore.user.id,
            status: 0
          }
        }
        try {
          await DemandApi.pubishDemand(regData)
          message.success('发布需求成功')
          this.props.history.push('/admin/demand/published-demand')
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
          <span styleName="title">发布需求</span>
        </div>
        <DemandForm form={this.props.form} />
        <div styleName="modBtn-container">
          <Button size="large" type="primary" onClick={this.submitForm}>发布</Button>
        </div>
      </div>
    )
  }
}
