// @flow
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import './searchInput.css'

import icoSearch from './ico_search.png'

type State = {
  showMenu: boolean,
  curOption: string,
  optionsArr: Array<string>
}

const optionList = [
  {
    label: '人才',
    value: 'talent'
  },
  {
    label: '项目',
    value: 'project'
  },
  {
    label: '成果',
    value: 'achievement'
  }
]

@withRouter
@inject('searchStore')
@observer
export default class SearchInput extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      showMenu: false,
      curOption: '人才',
      optionsArr: optionList.map(option => option.label)
    }
  }

  componentDidMount() {
    this.setState({
      curOption: optionList.find(option => option.value === this.props.searchStore.type).label
    })
    window.document.addEventListener('click', this.changeMenuState)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.changeMenuState)
  }

  changeMenuState = (e: SyntheticEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return
    }
    const { dataset, innerHTML } = e.target
    if (dataset && (dataset.searchCur || dataset.searchRect)) {
      // debugger // eslint-disable-line
      this.setState((pre) => ({
        showMenu: !pre.showMenu
      }))
    } else if (dataset && dataset.searchLi) {
      this.setState({
        curOption: innerHTML,
        showMenu: false
      })
      switch (innerHTML) {
        case '人才':
          this.props.searchStore.setType('talent')
          break
        case '项目':
          this.props.searchStore.setType('project')
          break
        case '成果':
          this.props.searchStore.setType('achievement')
          break
      }
    } else {
      this.setState({
        showMenu: false
      })
    }
  }

  onIptKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.props.history.push('/search')
    }
  }

  onIptChange = (e) => {
    this.props.searchStore.setContent(e.target.value)
  }

  render() {
    const { optionsArr } = this.state
    return (
      <form styleName="search-comp" onSubmit={e => e.preventDefault()}>
        <div styleName="select-box">
          <div styleName="select-current" data-search-cur>
            {this.state.curOption}&nbsp;<span styleName="rect" data-search-rect />
          </div>
          {this.state.showMenu &&
            <ul styleName="select-menu">
              {optionsArr.filter(i => i !== this.state.curOption).map((label, idx) => (
                <li styleName="select-option" key={idx} data-search-li>{label}</li>
              ))}
            </ul>
          }
        </div>
        <div styleName="search-input-container">
          <input
            styleName="search-input"
            placeholder="人才、项目、成果、专利"
            onChange={this.onIptChange}
            onKeyDown={this.onIptKeyDown} />
          <Link to="/search"><img styleName="search-ico" src={icoSearch} /></Link>
        </div>
      </form>
    )
  }
}
