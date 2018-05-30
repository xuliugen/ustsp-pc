// @flow
import React from 'react'
import './introduction.css'

type State = {
  introduction: string
}

export default class Introduction extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      introduction: '简称XDM，指在来自不同域之间的页面间传递消.主要核心通过postMessage()方法，接收两个参数:一条消息和一个表示消息接收方来自哪个域的字符串，使用可以不限制，但是不推荐因为不太安全页面间传递消.主要核心通过postMessage()方法，接收两个参数:一条消息和一个表示消息接收方来自哪个域的字符串，使用可以不限制，但是不推荐因为不太安全页面间传递消.主要核心通过postMessage()方法，接收两个参数:一条消息和一个表示消息接收方来自哪个域的字符串，使用可以不限制，但是不推荐因为不太安全页面间传递消.主要核心通过postMessage()方法，接收两个参数:一条消息和一个表示消息接收方来自哪个域的字符串，使用可以不限制，但是不推荐因为不太安全'
    }
  }
  render() {
    return (
      <div styleName="intro">
        <p>{this.state.introduction}</p>
      </div>
    )
  }
}
