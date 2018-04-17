import React from 'react'
import { Form } from 'antd'
import FormTitle from 'src/components/common/info/form-title/FormTitle'
import './enterpriseOtherInfo.css'

const FormItem = Form.Item

export default class EnterpriseOtherInfo extends React.Component {
  render() {
    const etpOtherInfo = this.props.etpOtherInfo
    return (
      <div>
        <FormTitle title={'其他信息'} />
        <div styleName="content">
          <FormItem label="公司主页">
            <a href="">{etpOtherInfo.indexPage}</a>
          </FormItem>
          <FormItem label="微信公众号">
            <span>{etpOtherInfo.wechat}</span>
          </FormItem>
          <FormItem label="公司简介">
            <span>{etpOtherInfo.introduction}</span>
          </FormItem>
        </div>
      </div>
    )
  }
}
