import React from 'react'
import { FormTitle } from '../../common'
import './stuEducationalExperience.css'
import ExpItem from './exp-item/ExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} />
        <div styleName="content">
          <ExpItem />
          <div>
            <div>
              <div>
                <span styleName="school-name">西南财经大学</span>
                <span styleName="time-text">2011.9-2013.7</span>
              </div>
              <div styleName="degree-text">全日制本科</div>
              <div style={{marginTop: '10px'}}>
                <span styleName="major-text">外语学院/对外汉语专业</span>
                <span styleName="edit-text" >编辑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
