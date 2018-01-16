// @flow
import React from 'react'
import './teacher.css'
import CardHeader from '../common/header/CardHeader'

export default class Teacher extends React.Component<{}> {
  render() {
    return (
      <div styleName="teacher-interested" >
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的老师" />
        </div>
      </div>
    )
  }
}
