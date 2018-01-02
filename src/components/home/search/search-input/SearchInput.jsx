// @flow
import React from 'react'
import './searchInput.css'
// import icoTriangle from './ico_triangle.png'
import icoSearch from './ico_search.png'

type State = {
  showMenu: boolean,
  curOption: string
}

export default class SearchInput extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      showMenu: false,
      curOption: '人才'
    }
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
    } else {
      this.setState({
        showMenu: false
      })
    }
  }

  componentDidMount() {
    window.document.addEventListener('click', this.changeMenuState)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.changeMenuState)
  }

  render() {
    const optionsArr = ['人才', '项目', '专利', '成果']
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
          <input styleName="search-input" placeholder="人才、项目、成果、专利" />
          <img styleName="search-ico" src={icoSearch} />
        </div>
      </form>
    )
  }
}
