import React from 'react'
import './introduction.css'

export default class Introduction extends React.Component {
  render() {
    return (
      <div styleName="intro">
        <div>
          <h4>个人简介</h4>
          <p>  {this.props.introduction.introduction}</p>
        </div>
        <div>
          <h4>学术经历</h4>
          <p>  {this.props.introduction.academicExperience}</p>
        </div>
        <div>
          <h4>科研介绍</h4>
          <p>  {this.props.introduction.scienceIntroduction}</p>
        </div>
        <div>
          <h4>发表文章</h4>
          <p>  {this.props.introduction.publishPaper}</p>
        </div>
      </div>
    )
  }
}
