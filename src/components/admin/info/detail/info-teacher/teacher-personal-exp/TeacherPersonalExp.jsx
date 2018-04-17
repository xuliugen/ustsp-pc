import React from 'react'
import { Form, Row, Col } from 'antd'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import './teacherPersonalExp.css'

const FormItem = Form.Item

export default class TeacherPersonalExp extends React.Component {
  render() {
    return (
      <div>
        <FormTitle title={'个人履历'} />
        <div styleName="personal-exp-content">
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="学校" style={{ flexFlow: '1' }}>
                <span>电子科技大学</span>
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                <span>软件工程</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                <span>信息与软件工程学院</span>
              </FormItem>
              <FormItem label="职称">
                <span>教授</span>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="研究方向">
            <span>人工智能，自然语言处理，文本语义分析等···</span>
          </FormItem>
          <FormItem label="教学情况">
            <span>承担本科生《数字逻辑》教学，研究生《算法导论》课程教学</span>
          </FormItem>
          <FormItem label="个人简介">
            <span>你只需要知道，反正就是非常牛逼这么一个人嘛····</span>
          </FormItem>
          <FormItem label="学术经历">
            <span>2000年7月毕业于电子科技大学，获计算机科学与技术专业学士学位，并推荐免试攻读电子科技大学硕博连读，师从熊光泽教授； 2003年3月毕业于电子科技大学，获计算机应用技术专业硕士学位； 2006年3月毕业于电子科技大学，获计算机应用技术专业博士学位。</span>
          </FormItem>
          <FormItem label="科研简介">
            <span>主持并参与了核高基、自然科学基金、863等多项国家级和省级科研项目，其中作为第二负责人主持了国家自然科学基金项目面上项目一项、实到校年度单项科研经费100万元以上项目一项，对SoC软/硬件协同设计技术等领域的前沿技术有较深入的探索，取得了一些创新性成果。获准软件著作权一项；以第一作者在国内外主要的学术刊物和会议上发表学术论文十余篇，其中被SCI收录1篇，被EI光盘版收录6篇，被ISTP收录3篇。</span>
          </FormItem>
          <FormItem label="发表文章">
            <span>
              1. 《嵌入式系统原理及应用开发技术（第2版）》，2008年1月，高等教育出版社，承担比例：1/12<br />
              2. 《汇编语言程序设计》，2009年10月，清华大学出版社，承担比例：1/3。
            </span>
          </FormItem>
        </div>
      </div>
    )
  }
}
