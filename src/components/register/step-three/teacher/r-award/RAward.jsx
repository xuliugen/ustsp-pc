import React from 'react'
import { FormTitle } from '../../common'
import './RAward.css'
import RAwardItem from './r-award-item/RAwardItem'

export default class RAward extends React.Component<{}> {
  render() {
    return (
      <div styleName="r-award">
        <FormTitle title={'科研获奖'} />
        <div styleName="content">
          <RAwardItem />
        </div>
      </div>
    )
  }
}
