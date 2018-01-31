// @flow
import React from 'react'
import { TalentApi } from 'src/ajax'
import Header from 'components/detail/common/header/Header'
import { inject, observer } from 'mobx-react'
import TalentItem from './talent-item/TalentItem'
import './talentsRmd.css'

type SimilarObj = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

type State = {
  similar: Array<SimilarObj>
}

@inject('userStore')
@observer
export default class TalentsRmd extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      talents: []
    }
  }

  async componentWillMount() {
    try {
      const { userStore } = this.props
      let param
      if (userStore.isLogin) {
        param = userStore.user.id
      }
      const { data } = await TalentApi.fetchRmdTalents(param)
      if (Array.isArray(data)) {
        this.setState({
          talents: data.slice(0, 4)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const talentItem = this.state.talents.map((item, idx) => {
      return <TalentItem talent={item} key={idx} />
    })
    return (
      <div styleName="similar">
        <Header title="类似人才推荐" />
        { talentItem }
      </div>
    )
  }
}
