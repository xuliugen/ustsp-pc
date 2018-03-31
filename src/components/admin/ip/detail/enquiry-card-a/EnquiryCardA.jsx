import React from 'react'
import './enquiryCardA.css'

import EnquiryPerson from './enquiry-person/EnquiryPerson'
import SendPerson from './send-person/SendPerson'
import SendDialog from './send-dialog/SendDialog'
import SignDialog from './sign-dialog/SignDialog'

export default class EnquiryCardA extends React.Component {
  state = {
    sendDialogVisible: false,
    signDialogVisible: false,
    currentApplyPerson: {},
    currentWonderPerson: {}
  }

  constructor() {
    super()
    this.changeDialogStatus = this.changeDialogStatus.bind(this)
    this.setCurrentApplyPerson = this.setCurrentApplyPerson.bind(this)
    this.setCurrentWonderPerson = this.setCurrentWonderPerson.bind(this)
  }

  changeDialogStatus(type, visible) {
    switch (type) {
      case 'send':
        this.setState({
          sendDialogVisible: visible
        })
        break
      case 'sign':
        this.setState({
          signDialogVisible: visible
        })
    }
  }

  setCurrentApplyPerson(person) {
    this.setState({
      currentApplyPerson: person
    })
  }

  setCurrentWonderPerson(person) {
    this.setState({
      currentWonderPerson: person
    })
  }

  render() {
    const { partyB } = this.props
    const applyPersons = []
    const sendedPersons = []
    const wonderPerson = []
    partyB.forEach(person => {
      switch (person.status) {
        case 'apply':
          applyPersons.push(person)
          break
        case 'sended':
          sendedPersons.push(person)
          break
        case 'wonder':
          wonderPerson.push(person)
          break
      }
    })
    return (
      <div styleName="root">
        <div styleName="title">
          询价情况 & 购买意愿
        </div>
        <div styleName="content">
          <div styleName="enquiry">
            <div styleName="persons-title">询价({applyPersons.length})</div>
            {applyPersons.map((person, idx) => {
              return (
                <EnquiryPerson
                  key={idx}
                  changeSendDialogStatus={this.changeDialogStatus.bind(this, 'send')}
                  info={person}
                  setPerson={this.setCurrentApplyPerson} />
              )
            })}
          </div>
          <div styleName="send">
            <div styleName="persons-title">已发送文件({wonderPerson.length + sendedPersons.length})</div>
            {wonderPerson.map((person, idx) => {
              return (
                <SendPerson key={idx} changeSignDialogStatus={this.changeDialogStatus.bind(this, 'sign')} info={person} />
              )
            })}
            {sendedPersons.map((person, idx) => {
              return (
                <SendPerson key={idx} info={person} />
              )
            })}
          </div>
        </div>
        <SendDialog
          visible={this.state.sendDialogVisible}
          changeSendDialogStatus={this.changeDialogStatus.bind(this, 'send')}
          ip={this.props.ip}
          person={this.state.currentApplyPerson}
          dispatch={this.props.dispatch} />
        <SignDialog
          visible={this.state.signDialogVisible}
          changeSignDialogStatus={this.changeDialogStatus.bind(this, 'sign')}
          dispatch={this.props.dispatch} />
      </div>
    )
  }
}
