import React from 'react'
import { Form } from 'antd'
import FormTitle from '../../form-title/FormTitle'
import './EnterpriseOtherInfo.css'

const FormItem = Form.Item

export default class EnterpriseOtherInfo extends React.Component {
  render() {
    return (
      <div>
        <FormTitle title={'其他信息'} />
        <div styleName="content">
          <FormItem label="公司主页">
            <a href="#">https://keyuan.uestc.edu.cn</a>
          </FormItem>
          <FormItem label="微信公众号">
            <span>keyuangufen11923</span>
          </FormItem>
          <FormItem label="公司简介">
            <span>电子科大科园股份有限公司于1998年12月29日在成都市高新工商局登记成立。法定代表人郝钦伟，公司经营范围包括研制、开发、生产和销售软件及电子产品；技术转让等</span>
          </FormItem>
        </div>
      </div>
    )
  }
}
