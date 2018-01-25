import React from 'react'
import './sideNav.css'

export default class SideNav extends React.Component<{}> {
  componentDidMount() {
    const elements = this.props.pos.Elements
    // 设置导航的定位
    const offTop = getTopProp(elements[0])
    const offLeft = getLeftProp(document.getElementsByClassName('element-container')[0])
    this.sideNav.style.top = offTop + 'px'
    this.sideNav.style.left = offLeft + 'px'
    // 设置监听
    let items = []
    const itemsTop = elements.map((element) => element.offsetTop - offTop)
    this.onScrollListener = this.onScrollListener.bind(this, items, itemsTop)
    window.addEventListener('scroll', this.onScrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollListener)
  }

  onScrollListener(items, itemsTop) {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (itemsTop.length === 2) {
      if (scrollTop < itemsTop[1]) {
        items = document.getElementsByClassName('side-nav-item')
        changeClass(items[0])
      } else if (scrollTop > itemsTop[1]) {
        items = document.getElementsByClassName('side-nav-item')
        changeClass(items[1])
      }
    } else if (itemsTop.length > 2) {
      for (let i = 0; i < itemsTop.length; i++) {
        if (i === 0) {
          continue
        } else if (i === 1) {
          if (scrollTop < itemsTop[1]) {
            items = document.getElementsByClassName('side-nav-item')
            changeClass(items[0])
          }
        } else if (i < itemsTop.length - 1) {
          if (scrollTop > itemsTop[i - 1] && scrollTop < itemsTop[i]) {
            items = document.getElementsByClassName('side-nav-item')
            changeClass(items[i - 1])
          }
        } else if (i === itemsTop.length - 1) {
          if (scrollTop > itemsTop[i - 1] && scrollTop < itemsTop[i]) {
            items = document.getElementsByClassName('side-nav-item')
            changeClass(items[i - 1])
          } else if (scrollTop > itemsTop[i]) {
            items = document.getElementsByClassName('side-nav-item')
            changeClass(items[i])
          }
        }
      }
    }
  }

  handleClick = (idx, e) => {
    changeClass(e.target)
    window.scrollTo(0, this.props.pos.Elements[idx].offsetTop)
  }

  render() {
    const navItems = this.props.navItems.map((item, idx) => {
      const className = `side-nav-item ${idx === 0 ? 'active-nav' : ''}`
      return <li key={idx} ><span className={className} onClick={(e) => this.handleClick(idx, e)} >{item}</span></li>
    })
    return (
      <div styleName="side-nav-container" ref={(el) => { this.sideNav = el }} >
        <ul>
          { navItems }
        </ul>
      </div>
    )
  }
}

function getTopProp(element) {
  return element.offsetTop
}

function getLeftProp(element) {
  return (element.offsetLeft + element.offsetWidth)
}

function changeClass(element) {
  let classNames = element.className.split(' ')
  if (classNames.indexOf('active-nav') === -1) {
    let activeEl = document.getElementsByClassName('active-nav')[0]
    activeEl.className = activeEl.className.split(' ')[0]
    element.className += ' active-nav'
  }
}
