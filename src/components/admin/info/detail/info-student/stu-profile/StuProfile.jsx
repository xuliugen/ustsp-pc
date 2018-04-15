import React from 'react'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import './stuProfile.css'
import {Form, Col, Row} from 'antd'

const FormItem = Form.Item

export default class StuProfile extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <FormTitle title={'个人履历'} />
        <Row gutter={20} >
          <Col span={24}>
            <FormItem label="擅长技能">
              <div>
              专注Java相关技术：SSM、Spring全家桶、微服务、MySQL、MyCat、集群、
              分布式、中间件、Linux、网络、多线程，偶尔讲点运维Jenkins、Nexus、
              Docker、ELK，偶尔分享些技术干货，致力于Java全栈开发！
              </div>
            </FormItem>
            <FormItem label="个人简历">
              <div>
              2000年7月毕业于电子科技大学计算机科学与工程学院计算机科学与技术专业，
              获学士学位； 2003年4月毕业于电子科技大学计算机科学与工程学院计算机应
              用技术专业，获硕士学位； 2006年4月毕业于电子科技大学计算机科学与工程
              学院计算机应用技术专业，获博士学位； 2013年1月到2014年1月获电子科技
              大学优秀青年教师出国计划资助在美国加州大学欧文分校（University of
              California, Irvine）计算机与电子工程系交流访问。 2006年4月至今，
              电子科技大学计算机学院、信息与软件工程学院任教，获电子科技大学“优秀
              青年主讲教师”、“教学质量优秀主讲教师”等称号。
              </div>
            </FormItem>
          </Col>
        </Row>
      </div>
    )
  }
}
