import React from 'react'
import { Form, Input, Row, Col } from 'antd'
import { FormTitle } from '../../common'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './tchPersonalExperience.css'

const FormItem = Form.Item
const { TextArea } = Input

@withRouter
@inject('registerStore')
@observer
export default class PersonalExperience extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="personal-experience">
        <FormTitle title={'个人履历'} />
        <div styleName="personal-experience-item" layout="vertical" >
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="就职学校" style={{ flexFlow: '1' }}>
                {getFieldDecorator('school', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入学校' }
                  ]
                })(
                  <Input placeholder="就职学校" />
                )}
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                {getFieldDecorator('major', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入专业' }
                  ]
                })(
                  <Input placeholder="专业" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                {getFieldDecorator('college', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入学院' }
                  ]
                })(
                  <Input placeholder="学院" />
                )}
              </FormItem>
              <FormItem label="职称">
                {getFieldDecorator('title', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入职称' }
                  ]
                })(
                  <Input placeholder="职称" />
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem label="研究方向">
            {getFieldDecorator('researchArea', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="教学情况">
            {getFieldDecorator('teachInfo', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 400, message: '字数不能超过400' }
              ]
            })(
              <TextArea rows={8} maxLength={400} />
            )}
          </FormItem>
          <FormItem label="学术经历">
            {getFieldDecorator('academicExperience', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 400, message: '字数不能超过400' }
              ]
            })(
              <TextArea rows={8} maxLength={400} />
            )}
          </FormItem>
          <FormItem label="科研简介">
            {getFieldDecorator('scienceIntroduction', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 400, message: '字数不能超过400' }
              ]
            })(
              <TextArea rows={8} maxLength={400} />
            )}
          </FormItem>
          <FormItem label="发表文章">
            {getFieldDecorator('publishPaper', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 400, message: '字数不能超过400' }
              ]
            })(
              <TextArea rows={8} maxLength={400} />
              // <div styleName="intro-container">
              //   <TextArea rows={8} />
              //   <span styleName="word-limit">字数限制: 0/400</span>
              // </div>
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
