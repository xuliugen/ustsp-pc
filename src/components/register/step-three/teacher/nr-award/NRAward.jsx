import React from 'react'
import { FormTitle } from '../../common'
import './NRAward.css'
import NRAwardItem from './nr-award-item/NRAwardItem'

export default class NRAward extends React.Component<{}> {
  render() {
    return (
      <div styleName="nr-award">
        <FormTitle title={'非科研获奖'} />
        <div styleName="content">
          <NRAwardItem />
        </div>
      </div>
    )
  }
}
