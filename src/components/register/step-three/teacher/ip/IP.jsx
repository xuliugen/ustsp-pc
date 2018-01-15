import React from 'react'
import { FormTitle } from '../../common'
import './ip.css'
import IPItem from './ip-item/IPItem'

export default class IP extends React.Component<{}> {
  render() {
    return (
      <div styleName="ip">
        <FormTitle title={'知识产权'} />
        <div styleName="content">
          <IPItem />
        </div>
      </div>
    )
  }
}
