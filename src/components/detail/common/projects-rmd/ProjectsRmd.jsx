
// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import ProjectItem from './project-item/ProjectItem'
import './projectsRmd.css'

type SimilarObj = {
  name: string,
  major: string,
  money: string,
}

type State = {
  similar: Array<SimilarObj>
}

export default class TalentsRmd extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      similars: [
        { name: '项目标题', major: 'IT(计算机专业)', money: '12000' },
        { name: '项目标题', major: 'IT(计算机专业)', money: '12000' },
        { name: '项目标题', major: 'IT(计算机专业)', money: '12000' },
        { name: '项目标题', major: 'IT(计算机专业)', money: '12000' }
      ]
    }
  }
  render() {
    const similarItem = this.state.similars.map((item, idx) => {
      return <ProjectItem similar={item} key={idx} />
    })
    return (
      <div styleName="similar">
        <Header title="优秀项目推荐" />
        {similarItem}
      </div>
    )
  }
}
