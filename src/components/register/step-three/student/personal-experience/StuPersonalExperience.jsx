import React from 'react'
import { Form, Input, Select } from 'antd'
import { FormTitle } from '../../common'
import './stuPersonalExperience.css'
import { skill } from 'src/common/dataset'
const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option
const skillsOption = skill.map((item) => {
  return <Option key={item}>{item}</Option>
})

export default class PersonalExperience extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="personal-experience" ref={this.props.containerRef}>
        <FormTitle title={'个人履历'} />
        <div styleName="content">
          <FormItem label="擅长技能">
            {getFieldDecorator('skills')(
              <Select
                mode="tags"
                style={{ width: '100%' }}
              >
                {skillsOption}
              </Select>
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              validateTrigger: 'onBlur'
            })(
              <div styleName="intro-container">
                <TextArea rows={8} />
                <span styleName="word-limit">字数限制: 0/400</span>
              </div>
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
