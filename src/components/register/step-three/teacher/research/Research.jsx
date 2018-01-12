import React from 'react'
import { FormTitle } from '../../common'
import './research.css'
import ResearchItem from './research-item/ResearchItem'

export default class Research extends React.Component<{}> {
  render() {
    return (
      <div styleName="research">
        <FormTitle title={'科研情况'} />
        <div styleName="content">
          <ResearchItem />
        </div>
      </div>
    )
  }
}
