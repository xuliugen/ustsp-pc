// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import TalentItem from './talent-item/TalentItem'
// import avatar1 from 'src/assets/avatar1.png'
import './talentsRmd.css'
import { TalentApi } from 'src/ajax'

type SimilarObj = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

type State = {
  similar: Array<SimilarObj>
}

export default class TalentsRmd extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      similars: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await TalentApi.fetchSimilarTalents()
      console.log(data)
      if (Array.isArray(data)) {
        this.setState({
          similars: data.slice(0, 5)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const similarItem = this.state.similars.map((item, idx) => {
      return <TalentItem similar={item} key={idx} />
    })
    return (
      <div styleName="similar">
        <Header title="类似人才推荐" />
        { similarItem }
      </div>
    )
  }
}
