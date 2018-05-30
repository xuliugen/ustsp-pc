import React from 'react'
import { Form, Row, Col } from 'antd'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import './teacherPersonalExp.css'

const FormItem = Form.Item

export default class TeacherPersonalExp extends React.Component {
  render() {
    const tchPersonalExp = this.props.tchPersonalExp
    return (
      <div>
        <FormTitle title={'个人履历'} />
        <div styleName="personal-exp-content">
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="学校" style={{ flexFlow: '1' }}>
                <span>{tchPersonalExp.university}</span>
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                <span>{tchPersonalExp.major}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                <span>{tchPersonalExp.college}</span>
              </FormItem>
              <FormItem label="职称">
                <span>{tchPersonalExp.title}</span>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="研究方向">
            <span>{tchPersonalExp.researchArea}</span>
          </FormItem>
          <FormItem label="教学情况">
            <span>{tchPersonalExp.teachInfo}</span>
          </FormItem>
          <FormItem label="个人简介">
            <span>{tchPersonalExp.introduction}</span>
          </FormItem>
          <FormItem label="学术经历">
            <span>{tchPersonalExp.academicExperience}</span>
          </FormItem>
          <FormItem label="科研简介">
            <span>{tchPersonalExp.scienceIntroduction}</span>
          </FormItem>
          <FormItem label="发表文章">
            <span>{tchPersonalExp.publishPaper}</span>
          </FormItem>
        </div>
      </div>
    )
  }
}
