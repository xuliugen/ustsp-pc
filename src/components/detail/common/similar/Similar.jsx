// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import SimilarItem from './similar-item/SimilarItem'
import avatar1 from 'src/assets/avatar1.png'
import './similar.css'

type SimilarObj = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

type State = {
  similar: Array<SimilarObj>
}

export default class Similar extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      similars: [
        { name: '陈独秀', university: '西南石油大学', title: '教授', avatar: avatar1 },
        { name: '陈二秀', university: '成都大学', title: '讲师', avatar: avatar1 },
        { name: '陈三秀', university: '成都大学', title: '副教授', avatar: avatar1 },
        { name: '陈四秀', university: '西南名族大学', title: '教授', avatar: avatar1 }
      ]
    }
  }
  render() {
    const similarItem = this.state.similars.map((item, idx) => {
      return <SimilarItem similar={item} key={idx} />
    })
    return (
      <div styleName="similar">
        <Header title="类似人才推荐" />
        { similarItem }
      </div>
    )
  }
}
