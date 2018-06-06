import React from 'react'
import './modifyDemand.css'
import { Form, Button, message } from 'antd'
import { ProjectApi, DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import DemandForm from '../common/demand-form/DemandForm'

@inject('userStore')
@observer
@Form.create()
export default class ModifyDemand extends React.Component {
  state = {
    demand: {},
    uploadFileName: null
  }

  setFileName(fileName) {
    this.setState({
      uploadfileName: fileName
    })
  }

  componentDidMount() {
    this.getDemandDetail()
  }

  async getDemandDetail() {
    const { data } = await ProjectApi.getApplicationDetail(this.props.match.params.id)
    this.setState({
      demand: {
        ...data.projectInfoVo.projectResearchInfo,
        skills: data.projectInfoVo.projectSkillList
      }
    })
    // if (data.projectInfoVo.projectResearchInfo.uploadfileUrl) {
    //   this.setState({
    //     fileList: [{
    //       uid: 1,
    //       name: data.projectInfoVo.projectResearchInfo.uploadfileName,
    //       status: 'done',
    //       url: data.projectInfoVo.projectResearchInfo.uploadfileUrl
    //     }]
    //   })
    // }
  }

  handleModify = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        this.setState({
          visible: false
        })
        message.error('请完善需求信息')
      } else {
        const data = {
          projectSkillList: values.skills && values.skills.map(i => ({ skill: i, projectId: this.props.match.params.id })),
          projectResearchInfo: {
            id: this.props.match.params.id,
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
            uploadfileUrl: values.uploadfileUrl,
            uploadfileName: this.state.uploadFileName,
            money: Number(values.money),
            toOriented: values.oriented,
            projectIntroduction: values.projectIntroduction,
            ownerId: this.props.userStore.user.id,
            status: -1,
            projectView: this.state.demand.projectView
          }
        }
        try {
          await DemandApi.updateDemand(data)
          message.success('更新成功')
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
          <span styleName="title">修改</span>
        </div>
        <DemandForm form={this.props.form} demand={this.state.demand} setFileName={this.setFileName} />
        <div styleName="modBtn-container">
          <Button size="large" type="primary" onClick={this.handleModify}>修改</Button>
        </div>
      </div>
    )
  }
}
