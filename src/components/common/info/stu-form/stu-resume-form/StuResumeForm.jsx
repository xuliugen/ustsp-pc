import React from 'react'
import './stuResumeForm.css'
import { Form, Input, Select } from 'antd'
import FormTitle from '../../form-title/FormTitle'
import { skill } from 'src/common/dataset'

const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option

const skillsOption = skill.map((item) => {
  return <Option key={item}>{item}</Option>
})

export default class StuResumeForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { stuInfo } = this.props
    let skillInitVal = []
    if (stuInfo && Array.isArray(stuInfo.skill)) {
      skillInitVal = stuInfo.skill.map(i => i.skill)
    }

    return (
      <div styleName="root">
        <FormTitle title={'个人履历'} />
        <div styleName="content">
          <FormItem label="擅长技能">
            {getFieldDecorator('skill', {
              initialValue: skillInitVal
            })(
              <Select mode="tags" style={{ width: '100%' }} >
                {skillsOption}
              </Select>
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              initialValue: stuInfo && stuInfo.introduction,
              validateTrigger: 'onBlur'
            })(
              <TextArea rows={8} />
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
